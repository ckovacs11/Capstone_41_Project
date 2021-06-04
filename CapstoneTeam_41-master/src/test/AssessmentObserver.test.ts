/**
 * @jest-environment node
 */
import { AssessmentObserver } from '../AssessmentObserver';
import { AssessmentManager } from '../AssessmentManager';
import { connect, clean, close } from '../util/database';
/*******************************************************************************
 *
 * @file AssessmentObserver.test.ts
 * @version 2021.04.15
 * @author Capstone Team 41
 *
 * This file untest tests AssessmentObserver.ts
 */
/* TEST VARIABLES */
//TODO at test seeds
//  2 assessment observers
// 4 assessments



beforeAll(async () => {
  await connect('test-assessmentobserver', false);
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



/* TEST CASES */
describe('notify', () => {
  /* no assessments */
  test('no assessments', () => {
    //TODO verify assessment observer with
    // no assessments fails
    expect(false).toBe(false);
  });

  /* no match */
  test('no match', () => {
    //TODO verify when  id is not present
    // false is returned
    expect(false).toBe(false);
  });

  /* match */
  test('match', () => {
    expect(true).toBe(true);
  });

  /* all true */
  test('all true', () => {
    //TODO set 3/4 assessments to done
    //TODO verify final assessment sets isDone to true
    expect(true).toBe(true);
  });

  /* one false */
  test('one false', () => {
    //TODO set 2/4 assessments to done
    //TODO verify with 3/4 assessments set isDone is false
  });
});
