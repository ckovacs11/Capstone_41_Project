/**
 * @jest-environment node
 */
import { Assessment } from '../Assessment';
import { Employee } from '../Employee';
import { Question } from '../Question';
import { IndividualResult } from '../IndividualResult';
import { ResultCategory } from '../ResultCategory';
import { Company } from '../Company';
import { connect, close, clean } from '../util/database';
/************************
* IndividualResult.test
*
* unit tests for the IndividualResult class
*
* Capstone team 41: 20-21
* revision 1.0 - penelope benavidez
*
*/

/* TEST VARIABLES */
//TODO seed test database


beforeAll(async () => {
  await connect('test-individualresult', false);
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

describe('getAvg', () => {
  /* get avgX */
  test('getAvgX', () => {
    expect(3).toBe(3);
  });

  /* get avgX */
  test('getAvgY', () => {
    expect(3).toBe(3);
  });
});

describe('get raters', () => {
  /* get raters */
  test('getRaters', () => {
    expect([{}, {}]).toStrictEqual([{}, {}]);
  });
});

describe('find data', () => {
  //TODO populate data

  //TODO test data
  /* get Category */
  test('data', () => {
    expect({}).toEqual({});
  });
});
