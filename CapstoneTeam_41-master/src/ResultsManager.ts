/************************
 * ResultManager
 *
 * Manager class for result categories and individual results.
 *
 * Capstone team 41: 20-21
 *
 *
 */

import { ResultCategory } from "./ResultCategory";
import * as am from "./AssessmentManager";
//import { LoginManager } from './LoginManager';
import { IndividualResult } from "./IndividualResult";

/**
 * Makes an IndividualResult from an array of Assessment
 * ids
 *
 * @param assess_ids ids for the assessments to use
 * for the individual result
 * @returns an IndividualResult
 */
export async function makeResult(assess_ids: string[]) {
  //TODO implement
  return null;
}

/**
 * Edits the information for a result category
 *
 * @param id the result category id
 * @param name the name of the result category
 * @param text the text for the result category
 * @returns `true` if the edit was made
 */
export async function editCategory(id: string, name: string, text: string) {
  //TODO implement
  return false;
}

/**
 * Gets all the possible ResultCategories from the database
 * @returns an Array of Result Categories
 */
export async function getCategories() {
  //TODO implement
  return [];
}

/**
 * Searches the database for a ResultCategory with a
 * matching name or id
 *
 * @param id the id for the category
 * @param name the name of the category
 * @returns the ResultCategory if found
 */
export async function getCategory(id: string, name: string) {
  //TODO implement
  return null;
}

/**
 * Gets a result by its id
 *
 * @param id the id
 * @returns the IndividualResult
 */
export async function getResult(id: string) {
  //TODO implement
  return null;
}

/**
 * Gets all the results where the user with the
 * matching id is the subject
 *
 * @param s_id the subject employee User id
 * @returns the Array of IndividualResults
 */
export async function getResults(s_id: string) {
  //TODO implement
  return [];
}

/**
 * Adds a ResultCategory to the system
 *
 * @param rc the ResultCategory
 * @returns `true` if the ResultCategory was added
 */
export async function addCategory(rc: ResultCategory) {
  //TODO implement
  return false;
}
