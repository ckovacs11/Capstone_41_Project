import { Document, Model, model, Query, Schema, SchemaTypes, Types } from 'mongoose';
import { Company } from './Company';
import { User } from './User';
/*******************************************************************************
 * @file Employee.ts
 * @version 2021.04.15
 * @author Capstone Team 41
 * 
 * This file defines functions and types useful for interacting with a MongoDB
 * database.
 */

/***********************************************************
 * Defines the MongoDB Schema for an Employee user of the
 * application.
 * 
 * @param firstName the Employee's registered first name
 * @param lastName the Employee's registered last name
 * @param jobTitle the Employee's job title
 * @param company reference to the unique Company document
 * associated with the Employee
 * @param uid reference to the unique User Document
 * associated with the Employee
 */
const EmployeeSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  jobTitle: {
    type: String,
    required: true
  },
  company: {
    type: SchemaTypes.ObjectId,
    ref: 'Company',
    required: true
  },
  uid: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  }
});

/***********************************************************
 * Defines the MongoDB Document interface for a User of the 
 * system.
 * 
 * @param firstName the registered first name
 * @param lastName the registered last name
 * @param jobTitle the registered job title
 * @param company a reference to the Employee's Company
 * @param user a reference to the Employee's User data
 * @param fullName the registered full name
 */
export interface Employee extends Document{
  firstName: string;
  lastName?: string;
  jobTitle: string;
  company: Types.ObjectId | Company;
  user: Types.ObjectId | User;
  fullName: string;
}

/***********************************************************
 * Represents an unpopulated MongoDB Document for an
 * Employee
 * 
 * @param company the ObjectId for the Company
 * @param user the ObjectId for the User
 */
export interface EmployeeDoc extends Employee {
  company: Company['_id'];
  user: User['_id'];
}

/***********************************************************
 * Represents a populated MongoDB Document for an Employee
 * 
 * @param company the Document for the Company
 * @param user the Document for the User
 */
export interface EmpPopulatedDoc extends EmployeeDoc {
  company: Company;
  user: User;
}

/***********************************************************
 * A virtual method for obtaining the Employee's full name
 * 
 * @returns the full name of the Employee
 */
EmployeeSchema.virtual('fullName').get(function(this: Employee) {
  return this.firstName + this.lastName;
});

/***********************************************************
 * Represents the MongoDB Model for an Employee Document
 */
export interface EmployeeModel extends Model<Employee> {
  findEmpData(id: string): Promise<EmpPopulatedDoc>;
}

/***********************************************************
 * Populates an Employee Document from the database
 * 
 * @param id the id for the Employee Document
 * @returns the populated Document
 */
EmployeeSchema.statics.findEmpData = async function (this: Model<Employee>, id: string) {
  await this.findById(id).populate('Company').exec();
  return await this.findById(id).populate('User').exec();
};

/***********************************************************
 * Middleware for updating the references to Company and
 * User for an Employee document
 */
/* TODO find out how to update Company reference in db
EmployeeSchema.post<Query<Employee, Employee>>('findOneAndUpdate', function(doc) {
  await updateCompanyReference(doc);
});
*/

/***********************************************************
 * Represents a mongoose model for an Employee in the 
 * MongoDB database
 */
export default model<Employee, EmployeeModel>('Employee', EmployeeSchema);