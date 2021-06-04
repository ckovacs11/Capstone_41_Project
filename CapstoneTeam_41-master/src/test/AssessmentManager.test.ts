/**
 * @jest-environment node
 */
import { Assessment } from "../Assessment";
import * as am from "../AssessmentManager";
import * as rm from "../ResultsManager";
import { connect, close, clean } from '../util/database';

/* TEST VARIABLES */
//TODO make seeds
// assessments
// users
// questions

beforeAll(async () => {
  await connect('test-assessmanager', false);
});

beforeEach(async () => {
    //TODO save test variables to database
})

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});

describe('createAssessment', () => {
  //TODO
  test('', () => {
    expect(true).toBe(true);
  });
});

describe('editQuestion', () => {
  //TODO
  test('', () => {
    expect(true).toBe(true);
  });
});

describe('getAssessment', () => {
  //TODO
  test('', () => {
    expect(true).toBe(true);
  });
});

describe('getAssessments', () => {
  //TODO
  test('', () => {
    expect(true).toBe(true);
  });
});

describe('makeResults', () => {
  //TODO
  test('', () => {
    expect(true).toBe(true);
  });
});
