import { Document, Model, model, Schema, SchemaTypes } from 'mongoose';
/*******************************************************************************
 * @file Company.ts
 * @version 2021.04.15
 * @author Capstone Team 41
 *
 * This file defines functions and types useful for interacting with a MongoDB
 * database.
 */

/***********************************************************
 * Enumerator for Months
 *
 * @param JAN january
 * @param FEB february
 * @param MAR march
 * @param APR april
 * @param MAY may
 * @param JUN june
 * @param JUL july
 * @param AUG august
 * @param SEP september
 * @param OCT october
 * @param NOV november
 * @param DEC december
 */
export enum Month {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11
}

/***********************************************************
 * Represents a Date with a Month and Year only
 *
 * @param month the month
 * @param year the year
 */
export interface MonthYear {
  month: Month;
  year: number;
}

/***********************************************************
 * Defines a MongoDB Schema for a Company.
 *
 * @param name the name
 * @param contact the email for receiving the invoice
 * @param monthlyAssessments the history of Assessments for
 * the Company
 */
const CompanySchema = new Schema<Company, CompanyModel>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: String,
    required: true,
    unique: true
  },
  monthlyAssessments: {
    type: SchemaTypes.Map,
    required: true
  }
});

/***********************************************************
 * Defines the MongoDB Document interface for a Company in
 * the system.
 *
 * @param name the name
 * @param contact the email for receiving the invoice
 * @param monthlyAssessments the history of Assessments for
 * the Company
 */
export interface Company extends Document {
  name: string;
  contact: string; // email for company contact
  monthlyAssessments: Map<MonthYear, number>;
  addAssessments(key: MonthYear, num: number): boolean;
  getAssessments(key: MonthYear): number;
  removeAssessments(key: MonthYear, num: number): boolean;
}

/***********************************************************
 * Represents the MongoDB Model for a Company Document
 */
export interface CompanyModel extends Model<Company> {
  readonly type: 'COMPANY';
}

/***********************************************************
 * Adds Assessments to the company for a given invoice
 *
 * @param key the MonthYear for the invoice
 * @param num the number of Assessments to add
 * @returns `true` if Assessments were added, otherwise
 * `false`
 */
CompanySchema.methods.addAssessments = function (key: MonthYear, num: number) {
  const added = _isValidDate(key) && num > 0;
  if (added) {
    const curr = this.monthlyAssessments.get(key) || 0;
    this.monthlyAssessments.set(key, curr + num);
  }
  return added;
};

/***********************************************************
 * Obtains the number of Assessments for a Company for a
 * given invoice
 *
 * @param key the MonthYear of the invoice
 * @returns the number of Assessments for the invoice
 */
CompanySchema.methods.numAssessments = function (key: MonthYear) {
  return this.monthlyAssessments.get(key) || 0;
};

/***********************************************************
 * Removes Assessments from a given invoice
 *
 * @param key the MonthYear for the Assessment
 * @param num the number of Assessments to remove
 * @returns `true` if the Assessments were removed,
 * otherwise `false`
 */
CompanySchema.methods.removeAssessments = function (key: MonthYear, num: number): boolean {
  let removed = _isValidDate(key); // must be on or before today
  if (removed) {
    const curr = this.monthlyAssessments.get(key) || 0;
    removed = (curr - num) >= 0; //cannot have negative assessments
    if (removed) {
      this.monthlyAssessments.set(key, curr - num);
    }
  }
  return removed;
};

/***********************************************************
 * Represents a mongoose model for a Company in the MongoDB
 * database
 */
export default model<Company, CompanyModel>('Company', CompanySchema);

/***********************************************************
 * Checks if the MonthYear is the current MonthYear or
 * ealier
 *
 * @param val the MonthYear to check
 * @returns `true` if the MonthYear is this month or
 * earlier, `false` otherwise
 */
function _isValidDate(val: MonthYear): boolean {
  //TODO determine how long invoices are editable for
  // 1 month, 2 months, 3 months, 1 year, etc?
  let valid = val.month in Month;
  if (valid) {
    const today = new Date();
    const date = new Date(val.year, val.month, today.getDay());
    valid = date <= today;
  }
  return valid;
}
