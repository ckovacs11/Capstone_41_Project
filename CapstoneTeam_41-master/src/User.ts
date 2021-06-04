/*******************************************************************************
 * @file User.ts
 * @version 2021.04.12
 * @author Capstone Team 41
 * 
 * This file defines functions and types useful for interacting with a MongoDB
 * database.
 */

import { Document, Model, model, Query, Schema } from "mongoose";
import { hash } from 'bcrypt';

/***********************************************************
 * Defines the MongoDB Schema for a User of the application
 * 
 * @param email unique user email address
 * @param password user password (hashed before storage into
 * the database)
 * @param verified identifies if the user has clicked on the
 * email verification link sent after registering
 */
const UserSchema = new Schema<User, UserModel>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    required: true
  }
});

/***********************************************************
 * Defines the MongoDB Document interface for a User of the
 * system.
 * 
 * @param email the unique email for the user
 * @param password the user password, stored after hashing
 * @param verified boolean flag set to true after user
 * clicks a verification link.
 */
export interface User extends Document {
  email: string;
  password: string;
  verified: boolean;
  verify(): boolean;
}

/***********************************************************
 * Represents the MongoDB Model for a User Document
 */
export interface UserModel extends Model<User> {
  readonly type: 'USER'; // Stops eslint from giving an error
}

/***********************************************************
 * Middleware for hashing the user's password before storing
 * the user data in the database
 * 
 * @param next the next function to call for the Middleware
 */
UserSchema.pre<User>('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 0); //FIXME update salt
    //TODO use environment variable or similarly hidden varaibe
    // for salt. Do not put your salt for your hash in the code nor
    // the repo. It is a security risk.
  }
});

/***********************************************************
 * Handles verifying the user and updating the corresponding
 * database document
 * 
 * @param this the User
 * @returns a boolean value indicating the state of the
 * `verified` parameter
 */
UserSchema.methods.verify = async function(this: User) {
  this.verified = true;
  await this.save();
  return this.verified;
};

/***********************************************************
 * Represents a mongoose model for a User in the MongoDB
 * database
 */
export default model<User, UserModel>('User', UserSchema);
