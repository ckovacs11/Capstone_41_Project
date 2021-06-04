/**
 * @jest-environment node
 */
import Employee from '../Employee';
import { clean, close, connect } from '../util/database';
/*******************************************************************************
 * 
 * @file Employee.test.ts
 * @version 2021.04.12
 * @author Capstone Team 41
 * 
 * This file unit tests Employee.ts
 */
//TODO define seed data for tests
// Needat least: 1 emp, 1 user, 1 company

beforeAll(async () => {
  await connect('test-employee', false);
});

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});


/* TESTS */
it('Populate document', (done) => {
  //TODO test that the findEmpData function populates
  // the document with Company and User data
  expect(true).toBe(true);
  done();
});

it('Update Company & User references', (done) => {
  //TODO test that company refence updates when document
  // is updated
  expect(true).toBe(true);
  done();
});

it('Get full name', (done) => {
  //TODO test that full name returns the right information
  expect(true).toBe(true);
  done();
});