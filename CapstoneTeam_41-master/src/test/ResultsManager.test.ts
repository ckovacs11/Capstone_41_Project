/**
 * @jest-environment node
 */
//Test class for ResultsManager.

import { IndividualResult } from "../IndividualResult";
import { ResultCategory } from "../ResultCategory";
import * as rm from "../ResultsManager";
import * as am from "../AssessmentManager";
//import { LoginManager } from '../LoginManager';
import { Assessment } from "../Assessment";
import { connect, close, clean } from '../util/database';

/* TEST VARIABLES */
//TODO make seeds
// assessments
// users
// questions
// results

beforeAll(async () => {
  await connect('test-resultmanager', false);
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
test("pass", () => {
  expect(true).toBe(true);
});

/* TEST CASES */
test('add category', () => {
  //TODO
});

describe('make Result', () => {
  test('null array', () => {
    //TODO
    expect(null).toEqual(null);
  });

  test('ids not found in database', () => {
    //TODO
    expect(null).toEqual(null);
  });

  test('populated array', () => {
    //TODO should be happy day case
  });
});

describe('edit category', () => {
  test('name present', () => {
    //TODO
    expect(false).toBe(false);
  });

  test('name valid to add', () => {
    //TODO
  });
});

describe('get categories', () => {
  test('all categories', () => {
    //TODO
  });

  test('individual category', () => {
    //TODO
  });
});

describe('get results', () => {
  test('all results', () => {
    //TODO
  });

  test('individual result', () => {
    //TODO
  });
});
