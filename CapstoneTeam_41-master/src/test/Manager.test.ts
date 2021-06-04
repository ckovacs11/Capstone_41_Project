/**
 * @jest-environment node
 */
import { Company } from "../Company";
import { Manager } from "../Manager";
import { Team } from "../Team";
import { connect, close, clean } from '../util/database';
/************************
 * Manager.test
 *
 * Unit tests for the manager class.
 *
 * Capstone team 41: 20-21
 * revision 1.0 - penelope benavidez
 *
 */

/* TEST VARIABLES */
//TODO at test seeds
// 1 user
// 2 employees
// 1 company
// 1 team



beforeAll(async () => {
  await connect('test-manager', false);
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

/* TESTS */
describe('find data', () => {
  test('employee data', () => {
    //TODO verify employee data matches
    expect({}).toEqual({});
  });

  test('user data', () => {
    //TODO verify user data matches
    expect({}).toEqual({});
  });

  test('team data', () => {
    //TODO verify team data matches
    expect({}).toEqual({});
  });
});
