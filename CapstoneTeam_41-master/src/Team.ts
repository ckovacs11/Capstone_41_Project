import { Document, Model, model, Query, Schema, SchemaTypes, Types } from 'mongoose';
import { Company } from "./Company";
import { Employee } from "./Employee";
import { Manager } from "./Manager";
/************************
 * Team
 *
 * Represents a team of employees. Each team has manager and an employee list. Each team is associated with a company.
 * Employees can be added/removed from a team. Managers can be set/removed.
 *
 * Capstone team 41: 20-21
 *
 *
 */

/***********************************************************
 * Defines the MongoDB Schema for a Team
 */
const TeamSchema = new Schema({

});

/***********************************************************
 * Defines the MongoDB Document interface for an Team
 *
 * @param name the Team name
 * @param employees the list of Team employees
 * @param company the Team's company
 * @param manager the Team's manager
 */
export interface Team extends Document {
  name: string;
  employees: Types.ObjectId[] | Employee[];
  company: Types.ObjectId | Company;
  manager: Types.ObjectId | Manager;
  addEmployee(employee: Types.ObjectId | Employee): boolean;
  remEmployee(employee: Types.ObjectId | Employee): boolean;
}

/***********************************************************
 * Defines the unpopulated MongoDB Documnet for a Team
 */
export interface TeamDoc extends Team {
  //TODO implement
}

/***********************************************************
 * Defines the populated MongoDB Documnet for a Team
 */
export interface TeamPopDoc extends TeamDoc {
  //TODO implement
}

/**
 * Adds a unique employee to the Team
 *
 * @param employee the employee to add
 * @returns `true` if the employee is added
 */
TeamSchema.methods.addEmployee = async function (employee) {
  //TODO implement
  return false;
}

/**
 * Removes an employee from the Team
 *
 * @param employee the employee to remove
 * @returns `true` if the employee is removed
 */
TeamSchema.methods.remEmployee = async function (employee) {
  //TODO implement
  return  false;
}

/***********************************************************
 * Defines the unpopulated MongoDB Documnet for a Team
 */
export interface TeamModel extends Model<Team> {
  //TODO implement
  findData(id: string): Team;
}

/**
 * Populates and returns a Team document
 *
 * @param id the Team Document id
 * @returns the populated Team Document
 */
TeamSchema.statics.findData = async function (id) {
  //TODO implement
  return null;
}

/***********************************************************
 * Represents a mongoose model for a Team in the  MongoDB
 * database
 */
export default model<Team, TeamModel>('Team', TeamSchema);
