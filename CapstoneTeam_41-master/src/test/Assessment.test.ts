/**
 * @jest-environment node
 */
import assessModel from '../Assessment';
import Employee from '../Employee';
import AssessmentObserver from '../AssessmentObserver';
import { clean, close, connect } from '../util/database';
/*******************************************************************************
 *
 * @file Assessment.test.ts
 * @version 2021.04.15
 * @author Capstone Team 41
 *
 * This file untest tests Assessment.ts
 */
//TODO define seed data for test
// need 2 assessments (1 sales, 1 general)
// need at least 3 questions (1 both, 1 sales, 1 general)
// need 2 employees (evaluator, subject)
// need 1 assessment observer

beforeAll(async () => {
  await connect('test-assessment', false);
});

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});

/* TESTS */
test('Populate documents', () => {
  //TODO verify that document populates with data
  expect(true).toBe(true);
});

test('Populate Questions', () => {
  //TODO verify that questions are populated
  expect(true).toBe(true);
  //TODO verify evaluator, subject, and observer are
  // not populated
  expect(false).toBe(false);
});

describe('Set Answer', () => {
  test('invalid index', () => {
    //TODO test with an index <= -1
    expect(false).toBe(false);
    //TODO test with an index >= questions.length
    // both should return false
    expect(false).toBe(false);
  });

  test('invalid score', () => {
    //TODO test with score <= -1
    expect(true).toBe(true); // check method works
    expect(0).toBe(0); // check question score
    //TODO test with score >= 10
    expect(true).toBe(true); // check method works
    expect(9).toBe(9); // check question score
  });

  test('happy day case', () => {
    const score = 7;
    //TODO test
    expect(true).toBe(true); // method works
    expect(score).toBe(score); // score saved
  });
});
