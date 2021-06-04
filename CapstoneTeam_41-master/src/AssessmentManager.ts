/************************
 * AssessmentManager
 *
 * Manager class for individual assessments. AssessmentManager interacts with
 * the database of assessments and evaluators.
 * React components would call on the assessment manager to make API requests
 * in response to events triggered on the UI.
 * Capstone team 41: 20-21
 *
 */

import { qType, Question } from "./Question";
import assessModel, { Assessment } from "./Assessment";

/**
 *
 * @param s_id subject employee User id
 * @param e_id evaluator employees User id array
 * @param isGenAssess boolean indicating if this is a general
 * Assessment
 * @returns `true` if the Assessment was created
 */
export async function createAssessment(s_id: string, e_id: string[], isGenAssess: boolean) {
  //TODO implement
  // create array for assessments
  // create observer for assessments
  // fill array
  return false;
}

/**
 * Edits a question in the database
 *
 * @param id the Question id
 * @param text the Question text
 * @param isLoToHi if disagreement is good
 * @param isType the type of the Question
 * @returns `true` if question is edited
 */
export async function editQuestion(id: string, text: string, isLoToHi: boolean, isType: qType) {
  //TODO implement
  // find question
  // modify properties
  return false;
}

/**
 * Obtains an Assessment from the database
 *
 * @param id the Assessment id
 * @returns the Assessment
 */
export async function getAssessment(id: string) {
  //TODO implement
  //get Assessment
  return null;
}

/**
 * Obtains all the Assessments associated with a User
 *
 * @param u_id the user id
 * @returns Array of Assessments
 */
export async function getAssessments(u_id: string) {
  //TODO implement
  // get all Assessments associated with the user
  return [];
}

/**
 * Makes a result from the array of Assessment ids
 *
 * @param ids assessment ids to make result from
 * @returns IndividualResult id
 */
export async function makeResults(ids: string[]) {
  //TODO implement
  // move to results manager?
  return '';
}
