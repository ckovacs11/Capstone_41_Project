import { Team } from "./Team";
import { Employee } from "./Employee";
import { Company } from "./Company";
import { Document, Model, model, Schema, SchemaTypes, Types } from "mongoose";
import { User } from "./User";
/************************
 * Manager
 *
 * Represents a manager entity. Every team must have a manager. A manager can
 * assign assessments to employees through login privaleges.
 *
 * Capstone team 41: 20-21
 *
 */

/***********************************************************
 * Defines the MongoDB Schema for a Manager user of the
 * application.
 *
 * @param user the user data
 * @param employee the employee data
 * @param team the team data
 */
const ManagerSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'User'
  },
  employee: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Employee'
  },
  team: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'Team'
  }
});

/***********************************************************
 * Defines the MongoDB Document interface for a Manager
 * user of the application.
 *
 * @param user the user data
 * @param employee the employee data
 * @param team the team data
 */
export interface Manager extends Document {
  team: Types.ObjectId | Team;
  employee: Types.ObjectId | Employee;
  user: Types.ObjectId | User;
}

/***********************************************************
 * Represents an unpopulated MongoDB Document for a Manager
 *
 * @param user the user data
 * @param employee the employee data
 * @param team the team data
 */
export interface ManagerDoc extends Manager {
  team: any; //TODO Team['_id'];
  employee: Employee['_id'];
  user: User['_id'];
}

/***********************************************************
 * Represents a populated MongoDB Document for a Manager
 *
 * @param user the user data
 * @param employee the employee data
 * @param team the team data
 */
export interface ManagerPopDoc extends Manager {
  team: Team;
  employee: Employee;
  user: User;
}

/***********************************************************
 * Represents the MongoDB Model for a Manager Document
 */
export interface ManagerModel extends Model<Manager> {
  findData(id: string): Manager;
}

/***********************************************************
 * Populates and returns a Manager Document by id
 *
 * @param id the Manager id
 * @returns a populated Manager document
 */
ManagerSchema.statics.findData = async function (id: string) {
  await this.findById(id).populate('Team').exec();
  await this.findById(id).populate('Employee').exec();
  return await this.findById(id).populate('User').exec();
}

/***********************************************************
 * Represents a mongoose model for a Manager
 */
export default model<Manager, ManagerModel>('Manager', ManagerSchema);
