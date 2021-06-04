/**
 * @jest-environment node
 */
import { Company } from '../Company';
import { Administrator } from '../Administrator';
import { Assessment } from '../Assessment';
import { Employee } from '../Employee';
import { connect, close, clean } from '../util/database';
/************************
* Administrator.test
*
* unit tests for the administrator class
*
* Capstone team 41: 20-21
* revision 1.0 - penelope benavidez
*
*/

/* TEST VARIABLES */
//TODO
// 1 admin
// 1 manager
// 1 employee
// 2 assessments
// 1 user
// 1 company

beforeAll(async () => {
  await connect('test-administrator', false);
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

describe('populate data', () => {
  //TODO populate
  test('manager data', () => {
    expect({}).toEqual({});
  });

  test('employee data', () => {
    expect({}).toEqual({});
  });

  test('user data', () => {
    expect({}).toEqual({});
  });

  test('company data', () => {
    expect({}).toEqual({});
  });

  test('assessment data', () => {
    expect({}).toEqual({});
  });
});

describe('add assessment', () => {
  test('empty assessment list', () => {
    //TODO verify method works
    expect(true).toBe(true); // method return
    expect([{}]).toEqual([{}]); // assessments
  });

  test('duplicate', () => {
    //TODO add first time
    // verify method works
    expect(false).toBe(false); // method return
    expect([{}]).toEqual([{}]); // assessments
  });
});

describe('remove assessment', () => {
  test('empty assessment list', () => {
    //TODO verify method works
    expect(false).toBe(false); // method return
    expect([]).toEqual([]); // assessments
  });

  test('item match', () => {
    //TODO add item
    // verify method works
    expect(true).toBe(true); // method return
    expect([]).toEqual([]); // assessments
  });

  test('no match', () => {
    //TODO add first time
    // verify method works
    expect(false).toBe(false); // method return
    expect([{}]).toEqual([{}]); // assessments
  })
});
