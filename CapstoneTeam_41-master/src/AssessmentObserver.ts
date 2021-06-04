import { Document, Model, model, Schema, SchemaTypes, Types } from "mongoose";
import assessModel, { Assessment } from './Assessment';
/*******************************************************************************
 * @file AssessmentObserver.ts
 * @version 2021.04.12
 * @author Capstone Team 41
 *
 * This file defines functions and types useful for interacting with a MongoDB
 * database.
 */

/***********************************************************
 * Defines the MongoDB Schema for an AssessmentObserver for
 * a set of Assessments
 *
 * @param assessDone Array of booleans to track if the
 * Assessment in `assessments` at the corresponding index
 * is done
 * @param assessments Array of Assessments Observed by this
 * observer
 * @param isDone boolean to track if all Assessments are
 * complete
 */
const AssessObserveSchema = new Schema<AssessmentObserver, AssessObserveModel>({
  assessDone: [
    {
      type: Boolean,
      required: true
    }
  ],
  assessments: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Assessment',
      required: true
    }
  ],
  isDone: {
      type: Boolean,
      required: true,
      default: false
  }
});

/***********************************************************
 * Defines the MongoDB Document interface for an
 * AssessmentObserver
 * @param assessDone Array of booleans to track if the
 * Assessment in `assessments` at the corresponding index
 * is done
 * @param assessments Array of Assessments Observed by this
 * observer
 * @param isDone boolean to track if all Assessments are
 * complete
 */
export interface AssessmentObserver extends Document {
  assessDone: boolean[];
  assessments: Types.ObjectId[] | Assessment[];
  isDone: boolean;
  notify(id: string): boolean;
  populateAssessments(): boolean;
}

/***********************************************************
 * Defines an unpopulated AssessmentObserver Document
 *
 * @param assessments Array of Assessments Observed by this
 * observer
 */
export interface AssessObserveDoc extends AssessmentObserver {
  assessments: Types.ObjectId[];
  notify(id: string): boolean;
}

/***********************************************************
 * Defines a populated AssessmentObserver Document
 *
 * @param assessments Array of Assessments Observed by this
 * observer
 */
export interface AssessObservePopDoc extends AssessmentObserver {
  assessments: Assessment[];
  notify(id: string): boolean;
}

/***********************************************************
 * Represents the MongoDB Model for an AssessmenObserver
 * Document
 */
export interface AssessObserveModel extends Model<AssessmentObserver> {
  findAssessmentData(id: string): AssessmentObserver;
}

/***********************************************************
 * Updates the Assessment with the matching id to done
 * in the `assessDone` Array
 *
 * @param id Assessment id to match
 * @returns if all Assessments monitored by the observer
 * are done
 */
AssessObserveSchema.methods.notify = async function (id: string) {
  let notified = false;
  if (this.assessments) { // null check
    let done = true; // assume all assessments done
    await this.populateAssessments(); // populate assessments
    for (let i = 0; i < this.assessments.length; i++) {
      const _id = (this.assessments[i] as Assessment)._id;
      if (_id === id) {
        this.assessDone[i] = true;
      }
      done = done && this.assessDone[i];
    }
    this.isDone = done;

    if (this.isDone) {
      //TODO notify result factory and make result
    }
    notified = true;
  }
  return notified;
}

/***********************************************************
 * Populates Assessment Array for AssessmentObserver
 *
 * @returns `true` when done
 */
AssessObserveSchema.methods.populateAssessments = async function () {
  for (let i = 0; i < this.assessments.length; i++) {
    if (typeof this.assessments[i] === typeof Types.ObjectId) {
      this.assessments[i] = await assessModel.findById(this.assessments[i]) as Assessment;
    }
  }
  return true
}

/***********************************************************
 * Represents a mongoose model for an AssessmentObserver in
 * the MongoDB database
 */
export default model<AssessmentObserver, AssessObserveModel>('AssessmentObserver', AssessObserveSchema);
