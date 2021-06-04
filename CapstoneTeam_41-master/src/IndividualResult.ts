import { ResultCategory } from "./ResultCategory";
import { Employee } from "./Employee";
import { Assessment } from "./Assessment";
import { Document, model, Model, Schema, Types } from "mongoose";
/************************
 * IndividualResult
 *
 * Represents a result set for an employee. Class will calculate the average X and Y score for the overall score information.
 *
 * Capstone team 41: 20-21
 *
 *
 */

/***********************************************************
 * Defines the MongoDB Schema for an IndividualResult
 *
 */
const IndivResultSchema = new Schema({
  //TODO implement
});

/***********************************************************
 * Defines the MongoDB Document for an IndividualResult
 *
 * @param filename the file name for the result
 * @param date the date the result was generated
 * @param assessments the array of assessments for the
 * result
 * @param avgX the average x score of the assessments
 * @param avgY the average y score of the assessments
 * @param category the category the results indicate the
 * employee is in
 * @param subject the subject of the assessments
 */
export interface IndividualResult extends Document {
  filename: string;
  date: Date;
  assessments: Types.ObjectId[] | Assessment[];
  avgX: number;
  avgY: number;
  category: Types.ObjectId | ResultCategory;
  subject: Types.ObjectId | Employee;
  getEvaluators(): string[];
  calcAvgX(): number;
  calcAvgY(): number;
}

/***********************************************************
 * Defines the unpopulated MongoDB Document for an
 * IndividualResult
 */
export interface IndivResDoc extends IndividualResult {
  //TODO implement
}

/***********************************************************
 * Defines the populated MongoDB Document for an
 * IndividualResult
 */
export interface IndivResPopDoc extends IndividualResult {
  //TODO implement
}

/***********************************************************
 * Defines the MongoDB Model for an IndividualResult
 */
export interface IndivResModel extends Model<IndividualResult> {
  //TODO implement
  findData(id: string): IndividualResult;
}

/**
 * Gets the list of evaluators for the result assessments
 *
 * @returns a list of Employees
 */
IndivResultSchema.methods.getEvaluators = async function () {
  //TODO implement
  return [];
};

/**
 * Averages the x scores from the set of Assessments
 *
 * @returns the average x score
 */
IndivResultSchema.methods.calcAvgX = async function () {
  //TODO implement
  return -1;
};

/**
 * Averages the y scores from the set of Assessments
 *
 * @returns the average y score
 */
IndivResultSchema.methods.calcAvgY = async function () {
  //TODO implement
  return -1;
};

/**
 * Populates the IndividualResult document with a matching
 * id
 *
 * @param id the IndividualResult id
 * @returns the IndividualResult
 */
IndivResultSchema.statics.findData = async function (id: string) {
  //TODO implement
  return null;
}

/***********************************************************
 * Defines the mongoose model for an IndividualResult
 */
export default model<IndividualResult, IndivResModel>('IndividualResult', IndivResultSchema);
