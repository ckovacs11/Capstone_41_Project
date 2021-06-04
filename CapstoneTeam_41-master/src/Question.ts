import { Document, Model, model, Schema } from 'mongoose';
/*******************************************************************************
 * @file Question.ts
 * @version 2021.04.12
 * @author Capstone Team 41
 *
 * This file defines functions and types useful for interacting with a MongoDB
 * database.
 */

/***********************************************************
 * Enumerator for Question types
 *
 * @param GEN general assessment question
 * @param SALE sales assessment question
 * @param BOTH universal assessment question
 */
export enum qType {
  GEN = 0,
  SALE = 1,
  BOTH = 2
}

/***********************************************************
 * Defines the MongoDB Schema for a Question in an
 * Assessment
 *
 * @param text the text of the Question
 * @param score the assigned score for the Question, 0 if
 * no score has been given
 * @param isXQ flag which indicates if the Question affects
 * the score on the x-axis (`true`)
 * @param isGenQ flag which indicates if the Question is a
 * template for a general assessment (`true`) or sales
 * assessment (`false`)
 * @param isHiToLo flag to indicate if low number on UI is
 * good for the Subjectss score (`true`) or if a low number
 * is bad for the Subject's score (`false`)
 */
const QuestionSchema = new Schema<Question, QuestionModel>({
  text: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 0, // 0 when unanswered, 1 to 9 when answered
    max: 9 // 9 is max score for an assessment question
  },
  isXQ: {
    type: Boolean,
    required: true
  },
  isType: {
    type: Number // presence indicates template question
  },
  isHiToLo: {
    type: Boolean,
    required: true
  }
});

/***********************************************************
 * Defines the MongoDB Document interface for a Question in
 * the system.
 *
 * @param text the text of the Question
 * @param score the assigned score for the Question, 0 if
 * no score has been given
 * @param isXQ flag which indicates if the Question affects
 * the score on the x-axis (`true`)
 * @param isGenQ flag which indicates if the Question is a
 * template for a general assessment (`GEN`) or sales
 * assessment (`SALE`), or both (`BOTH`)
 * @param isHiToLo flag to indicate if low number on UI is
 * good for the Subjectss score (`true`) or if a low number
 * is bad for the Subject's score (`false`)
 */
export interface Question extends Document {
  text: string;
  score: number;
  isXQ: boolean;
  isGenQ?: qType;
  isHiToLo: boolean;
  clone(): Promise<Question>;
}

/***********************************************************
 * Represents the MongoDB Model for a Question Document
 */
export interface QuestionModel extends Model<Question> {
  readonly type: 'QUESTION'; // so eslint is happy
  //TODO? method to return a collection of questions for
  // an assessment
}

/***********************************************************
 * Handles cloning the Question to the database
 *
 * @param this the Question to clone
 * @returns the clone of the Question after saving it to the
 * database
 */
QuestionSchema.methods.clone = async function (this: Question): Promise<Question> {
  const newQ = new qmodel({
    text: this.text,
    score: 0,
    isXQ: this.isXQ,
    isHiToLo: this.isHiToLo
  });
  await newQ.save();
  return newQ;
};

/***********************************************************
 * Represents a mongoose model for a Question in the MongoDB
 * database
 */
export const qmodel = model<Question, QuestionModel>('Question', QuestionSchema);
