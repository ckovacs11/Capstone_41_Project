/**
 * @jest-environment node
 */
import { ResultCategory } from "../ResultCategory";
import { connect, close, clean } from '../util/database';
/************************
 * ResultCategory.test
 *
 * Unit tests for the ResultCategory class. Tests currently just match string parameters with the class attributes.
 *
 * Capstone team 41: 20-21
 *
 *
 */


/* TEST VARIABLES */
//TODO seed test database


beforeAll(async () => {
  await connect('test-resultcategory', false);
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
describe("text", () => {
  test('edit text', () => {
    expect('').toEqual('');
  })
});

describe("name", () => {
  test('edit name', () => {
    expect('').toEqual('');
  });

  test('names are unique', () => {
    //TODO try to add duplicate name

    expect(() => {throw new Error()}).toThrow();
  });
});
