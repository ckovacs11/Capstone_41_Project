/**
 * @jest-environment node
 */
/************************
 * Team.test
 *
 * Unit tests for the team class.
 *
 * Capstone team 41: 20-21
 *
 *
 */
import { Employee } from "../Employee";
import { Company } from "../Company";
import { Team } from "../Team";
import { Manager } from "../Manager";
import { clean, close, connect } from '../util/database';
/* TEST VARIABLES */
//TODO define seed data for tests

beforeAll(async () => {
  await connect('test-team', false);
});

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});

/* TESTS */
describe("removeEmployee", () => {
  /* remove employee that exists */
  test("removeEmployee", () => {
    //TODO
    expect(true).toBe(true);
  });
  /* remove employee that doesn't exist */
  test("removeFakeEmployee", () => {
    //TODO
    expect(false).toBe(false);
  });
});

describe("add Employee", () => {
  /* add unique employee */
  test("add employee", () => {
    //TODO
    expect(true).toBe(true);
  });

  /* add duplicate */
  test("fail to add", () => {
    //TODO
    expect(false).toBe(false);
  });
});
