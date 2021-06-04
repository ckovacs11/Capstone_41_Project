import { Assessment } from "./Assessment";
import { Company } from "./Company";
import { Employee } from "./Employee";
import { Manager } from "./Manager";
import { User } from "./User";
import {Document, Model, model, Schema, SchemaTypes, Types } from "mongoose";
/************************
 * Administrator
 *
 * Represents an administrator entity. An administrator is able to perform CRUD
 * operations on other entity data.
 * TODO Add CRUD methods for questions and users
 * Capstone team 41: 20-21
 *
 */

/***********************************************************
 * Defines the MongoDB Schema for an Administrator user of
 * the application.
 *
 * @param user the user data
 * @param employee the employee data
 * @param manager the manager data
 * @param company the company data
 * @param assessments the Assessments managed by the
 * Administrator
 */
const AdminSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  employee: {
    type: SchemaTypes.ObjectId,
    ref: 'Employee',
    required: true
  },
  manager: {
    type: SchemaTypes.ObjectId,
    ref: 'Manager',
    required: true
  },
  company: {
    type: SchemaTypes.ObjectId,
    ref: 'Company',
    required: true
  },
  assessments: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Assessment',
      required: true
    }
  ]
});

/***********************************************************
 * Defines the MongoDB Document interface for an
 * Administrator user of the application.
 *
 * @param user the user data
 * @param employee the employee data
 * @param manager the manager data
 * @param company the company data
 * @param assessments the Assessments managed by the
 * Administrator
 */
export interface Administrator extends Document {
  user: Types.ObjectId | User;
  employee: Types.ObjectId | Employee;
  manager: Types.ObjectId | Manager;
  company: Types.ObjectId | Company;
  assessments: Types.ObjectId[] | Assessment[];
  addAssessment(assessment: Types.ObjectId | Assessment): boolean;
  remAssessment(assessment: Types.ObjectId | Assessment): boolean;
}

/***********************************************************
 * Represents an unpopulated MongoDB Document for an
 * Administrator
 *
 * @param user the user data
 * @param employee the employee data
 * @param manager the manager data
 * @param company the company data
 * @param assessments the Assessments managed by the
 * Administrator
 */
export interface AdminDoc extends Document {
  user: User['_id'];
  employee: Employee['_id'];
  manager: Manager['_id'];
  company: Company['_id'];
  assessments: Assessment['_id'][];
}

/***********************************************************
 * Represents a populated MongoDB Document for an
 * Administrator
 *
 * @param user the user data
 * @param employee the employee data
 * @param manager the manager data
 * @param company the company data
 * @param assessments the Assessments managed by the
 * Administrator
 */
export interface AdminPopDoc extends Document {
  user: User;
  employee: Employee;
  manager: Manager;
  company: Company;
  assessments: Assessment[];
}

/***********************************************************
 * Represents the MongoDB Model for an Administrator
 * Document
 */
export interface AdminModel extends Model<Administrator> {
  findData(id: string): Administrator;
}

/***********************************************************
 * Adds an Assessment to the list of assessments
 *
 * @param assessment the Assessment to add
 * @returns `true` if added
 */
AdminSchema.methods.addAssessment = async function (assessment: Types.ObjectId | Assessment) {
  //TODO implement
  // check that assessment is not in list already
  // append assessment to end of assessments
  return false;
}

/***********************************************************
 * Removes an Assessment from the list of assessments
 *
 * @param assessment the Assessment to remove
 * @returns `true` if removed
 */
AdminSchema.methods.remAssessment = async function (assessment: Types.ObjectId | Assessment) {
  //TODO implement
  // populate assessments
  // compare assessment id to assessments ids
  // remove assessment with matching id
  return false;
}

/***********************************************************
 * Populates and returns an Administrator Document by id
 *
 * @param id the Administrator id
 * @returns a populated Administrator document
 */
AdminSchema.statics.findData = async function (id: string) {
  await this.findById(id).populate('Manager').exec();
  await this.findById(id).populate('Employee').exec();
  await this.findById(id).populate('Company').exec();
  return await this.findById(id).populate('User').exec();
}

/***********************************************************
 * Represents a mongoose model for an Administrator
 */
export default model<Administrator, AdminModel>('Administrator', AdminSchema);
