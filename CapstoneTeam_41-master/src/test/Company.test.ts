/**
 * @jest-environment node
 */
import Company from '../Company';
import { clean, close, connect } from '../util/database';
/************************
* User.test
*
* unit tests for the user class
*
* Capstone team 41: 20-21
* revision 1.0 - penelope benavidez
*
*/

beforeAll(async () => {
  await connect('company-test', false);
});

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});


/* TESTS */
describe('addAssessments', () => {
  /* not a month */
  it('invalid date', (done) => {
    //TODO verify adding assessments to an
    // invalid date fails
    expect(false).toBe(false);
    done();
  });

  /* negative number */
  it('negativeNum', (done) => {
    //TODO verify that adding a negative number
    // of assessments fails
    expect(false).toBe(false);
    done();
  });

  /* positive number */
  it('positiveNum', (done) => {
    //TODO verify that adding a positive number
    // to a valid date invoice succeeds
    expect(true).toBe(true);
    done();
  });
});

describe('numAssessments', () => {
  /* no assessments */
  it('noAssessments', (done) => {
    //TODO verify output is 0 when there
    // are no assessments
    expect(0).toBe(0);
    done();
  });

  /* month not present */
  it('monthNotPresent', (done) => {
    //TODO verify output is 0 when the
    // MonthYear does not have an invoice
    expect(0).toBe(0);
    done();
  });

  /* month present */
  it('monthPresent', (done) => {
    //TODO verify that an invoice with
    // assessments returns a non-zero
    // value
    expect(1).toBeGreaterThan(0);
    done();
  });
});

describe('remAssessments', () => {
  /* no assessments */
  it('noAssessments', (done) => {
    //TODO verify removing assessments from
    // an invoice with no assessments fails
    expect(false).toBe(false);
    done();
  });

  /* month not present */
  it('monthNotPresent', (done) => {
    //TODO verify removing assessments from
    // a non-existent invoice
    expect(false).toBe(false);
    done();
  });

  /* exceeds value */
  it('remTooMany', (done) => {
    //TODO verify removing more assessments than
    // are present on the invoice fails
    expect(false).toBe(false);
    done();
  });

  /* success scenario */
  it('successScenario', (done) => {
    //TODO verify happy day case succeeds
      expect(true).toBe(true);
      done();
      //FIX: determine how long assessment nums should be modifiable for
  });
});
