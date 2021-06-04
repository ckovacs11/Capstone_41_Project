import { Document, Model, model, Schema, SchemaTypes, Types } from 'mongoose';
import { Employee } from "./Employee";
import { AssessmentObserver } from "./AssessmentObserver";
import { qmodel, qType, Question } from "./Question";
/*******************************************************************************
 * @file Assessment.ts
 * @version 2021.04.15
 * @author Capstone Team 41
 *
 * This file defines functions and types useful for interacting with a MongoDB
 * database.
 */

/***********************************************************
 * Defines the MongoDB Schema for an Assessment in the
 * System
 *
 * @param currQ the index of the current Question in the
 * Question array
 * @param questions the list of questions for the Assessment
 * @param xScore the total score of the x-axis questions
 * @param yScore the total score of the y-axis questions
 * @param observer the AssessmentObserver to notify on
 * completion of the assessment
 * @param subject the Employee subject of the Assessment
 * @param evaluator the Employee evaluator of the subject
 * @param isGenAssess a flag indicating if the Assessment is
 * a general assessment or a sales assessment
 * @param isDone a flag indicating if the Assessment is done
 * or in progress
 */
const AssessmentSchema = new Schema<Assessment, AssessmentModel>({
  currQ: {
    type: Number,
    required: true,
    min: 0, // array index starts at 0
    max: 17 // array index stops at 17
  },
  questions: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Question',
      required: true
    }
  ],
  xScore: {
    type: Number,
    required: true,
    min: 0,
    //TODO determine max x score possible
  },
  yScore: {
    type: Number,
    required: true,
    min: 0,
    //TODO determine max y score possible
  },
  observer: {
    type: SchemaTypes.ObjectId,
    ref: 'AssessmentObserver',
    required: true
  },
  subject: {
    type: SchemaTypes.ObjectId,
    ref: 'Employee',
    required: true
  },
  evaluator: {
    type: SchemaTypes.ObjectId,
    ref: 'Employee',
    required: true
  },
  isGenAssess: {
    type: Boolean,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  },
});

/***********************************************************
 * Defines the MongoDB Document interface for an Assessment
 * in the System
 *
 * @param currQ the index of the current Question in the
 * Question array
 * @param questions the list of questions for the Assessment
 * @param xScore the total score of the x-axis questions
 * @param yScore the total score of the y-axis questions
 * @param observer the AssessmentObserver to notify on
 * completion of the assessment
 * @param subject the Employee subject of the Assessment
 * @param evaluator the Employee evaluator of the subject
 * @param isGenAssess a flag indicating if the Assessment is
 * a general assessment or a sales assessment
 * @param isDone a flag indicating if the Assessment is done
 * or in progress
 */
export interface Assessment extends Document {
  currQ: number;
  questions: Array<Types.ObjectId> | Array<Question>;
  xScore: number;
  yScore: number;
  observer: Types.ObjectId | AssessmentObserver;
  subject: Types.ObjectId | Employee;
  evaluator: Types.ObjectId | Employee;
  isGenAssess: boolean;
  isDone: boolean;
  populateQuestions(): boolean;
  setAnswer(idx: number, score: number): boolean;
  submit(): boolean;
}

/***********************************************************
 * Represents an unpopulated MongoDB Document for an
 * Assessment
 *
 * @param questions the list of ObjectIds for the Questions
 * in the Assessment
 * @param observer the ObjectId for the AssessmentObserver
 * @param subject the ObjectId for the subject Employee of
 * the Assessment
 * @param evaluator the ObjectId for the evaluator Employee
 * assigned the Assessment
 */
export interface AssessmentDoc extends Assessment {
  questions: Array<Question['_id']>;
  observer: AssessmentObserver['_id'];
  subject: Employee['_id'];
  evaluator: Employee['_id'];
}

/***********************************************************
 * Represents a populated MongoDB Document for an Assessment
 *
 * @param questions the list of Questions for the Assessment
 * @param observer the AssessmentObserver
 * @param subject the subject Employee of the Assessment
 * @param evaluator the evaluator Employee assigned the
 * Assessment
 */
export interface AssessmentPopulatedDoc extends Assessment {
  questions: Array<Question>;
  observer: AssessmentObserver;
  subject: Employee;
  evaluator: Employee;
}

/***********************************************************
 * Represents the MongoDB Model for an Assessment Document
 */
export interface AssessmentModel extends Model<Assessment> {
  createAssessment(
    isGenAssess: boolean,
    subject: Types.ObjectId,
    evaluator: Types.ObjectId,
    observer: Types.ObjectId
  ): Promise<AssessmentDoc>;
  createAssessment(
    isGenAssess: boolean,
    subject: Employee,
    evaluator: Employee,
    observer: AssessmentObserver
  ): Promise<AssessmentPopulatedDoc>;
  findAssessmentData(id: string): Promise<AssessmentPopulatedDoc>;
}

/***********************************************************
 * Populates the Question Array for the Assessment
 *
 * @param this the Assessment Document to populate
 * @returns the populated Assessment Document
 */
AssessmentSchema.methods.populateQuestions = async function () {
  for (let i = 0; i < this.questions.length; i++) {
    if (typeof this.questions[i] === typeof Types.ObjectId) {
      this.questions[i] = await qmodel.findById(this.questions[i]) as Question;
    }
  }
  return true;
}

/***********************************************************
 * Sets the score for a Question in an Assessment
 *
 * @param this the Assessment Document to modify
 * @param idx the index of the Question
 * @param score the score to assign to the Question
 * @returns boolean indicating if the score was set for the
 * Question
 */
AssessmentSchema.methods.setAnswer = async function (idx: number, score: number) {
  let set = false;
  if (idx > -1 && idx < this.questions.length && this.questions[idx]) {
    await this.populateQuestions();
    // document is populated
    const q = () => this.questions[idx] as Question;
    // update question
    q().score = Math.max(0, Math.min(score, 9)); // ensures number is between 0 and 9
    await q().save();
    // update assessment
    if (q().isXQ) {
      this.xScore += q().score;
    } else {
      this.yScore += q().score;
    }
    if (idx < this.questions.length) {
      this.currQ = idx + 1;
    } else {
      this.currQ = idx;
      //TODO display submit button on web page
      // evaluator is at the end of the assessment
    }
    await this.save();
    set = true;
  }
  return set;
}

/***********************************************************
 * Checks that the Assessment is ready to submit
 *
 * @param this the Assessment Document to submit
 * @returns boolean value indicating if the Assessment was
 * submitted, `false` if the Assessment is incomplete or the
 * Questions in the Assessment are undefined
 */
AssessmentSchema.methods.submit = async function () {
  let submitted = true;
  await this.populateQuestions();
  // questions are populated
  // check that all questions have answers
  for (let i = 0; i < this.questions.length && submitted; i++) {
    if (this.questions[i] === null || this.questions[i] === undefined) {
      submitted  = false;
    }
    submitted = submitted &&
    (this.questions[i] as Question).score > 0 &&
    (this.questions[i] as Question).score <= 9;
  }
  if (submitted) {
    // notify observer all questions are done
    this.isDone = true;
    await this.save();
    if (this.observer) {
      //TODO populate observer
      //TODO this.observer.notify(this._id);
    }
  }
  return submitted;
}

/***********************************************************
 * Generates an Assessment in the system
 *
 * @param this the Assessment Model defined for mongoose
 * @param isGenAssess boolean indicating if the Assessment
 * is a general assessment (`true`) or a sales assessment
 * (`false`)
 * @param subject the subject Employee of the Assessment
 * @param evaluator the evaluator Employee for the
 * Assessment
 * @param observer the AssessmentObserver to notify on
 * completion of the Assessment
 * @returns the Assessment Document saved in the system
 */
AssessmentSchema.statics.createAssessment = async function (isGenAssess: boolean, subject: Types.ObjectId | Employee, evaluator: Types.ObjectId | Employee, observer: Types.ObjectId | AssessmentObserver) {
  const type = (isGenAssess) ? qType.GEN : qType.SALE;
  const temp_questions = await qmodel.find({$or: [{isType: qType.BOTH}, {isType: type}]});
  const questions: Array<Question> = [];
  for (const question of temp_questions) {
    questions.push(await question.clone());
  }
  const newAssess = new assessModel({
    currQ: 0,
    questions: questions,
    xScore: 0,
    yScore: 0,
    observer: observer,
    subject: subject,
    evaluator: evaluator,
    isGenAssess: isGenAssess,
    isDone: false
  });
  await newAssess.save();
  return newAssess;
}

/***********************************************************
 * Populates an Assessment Document
 *
 * @param this the Assessment Model defined for mongoose
 * @param id the id of the Assessment Document
 * @returns the populated Assessment Document
 */
AssessmentSchema.statics.findAssessmentData = async function (id: string) {
  await this.findById(id).populate('AssessmentObserver').exec();
  await this.findById(id).populate('Employee').exec();
  return await this.findById(id).populate('Question').exec();
}

/***********************************************************
 * Represents a mongoose model for an Assessment in the
 * MongoDB database
 */
const assessModel = model<Assessment, AssessmentModel>('Assessment', AssessmentSchema);

export default assessModel;
