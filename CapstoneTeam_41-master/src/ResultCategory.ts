import { Document, model, Model, Schema, Types } from "mongoose";
/************************
 * ResultCategory
 *
 * Assessment results all have a category that can be specified by the evaluator.
 *
 * Capstone team 41: 20-21
 *
 *
 */

/***********************************************************
 * Defines the MongoDB Schema for a ResultCategory
 *
 */
const ResultCatSchema = new Schema({
  //TODO implement
});

/***********************************************************
 * Defines the MongoDB Document interface for a
 * ResultCategory
 *
 */
export interface ResultCategory extends Document {
  name: string;
  text: string;
}

/***********************************************************
 * Defines the MongoDB Model interface for a
 * ResultCategory
 *
 */
export interface ResultCatModel extends Model<ResultCategory> {
  //TODO implement
}

/***********************************************************
 * Defines the mongoose model for a ResultCategory
 *
 */
export default model<ResultCategory, ResultCatModel>('ResultCategory', ResultCatSchema);
