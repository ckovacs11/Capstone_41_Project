/**
 * @jest-environment node
 */
import { Question } from '../Question';
import { clean, connect, close } from '../util/database';
/*******************************************************************************
 *
 * @file Question.test.ts
 * @version 2021.04.12
 * @author Capstone Team 41
 *
 * This file unit tests Question.ts
 */

beforeAll(async () => {
  await connect('test-question', false);
});

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});

/* TEST */
it('Question clones', (done) => {
  //TODO test that the clone function copies the question
  // data and saves the question to the database
  expect(true).toEqual(true);
  done();
});
