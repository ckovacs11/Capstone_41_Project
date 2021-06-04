/**
 * @jest-environment node
 */
import User from '../User';
import { connect, close, clean } from '../util/database';
import 'dotenv/config'
/*******************************************************************************
 * @file User.test.ts
 * @version 2021.04.12
 * @author Capstone Team 41
 * 
 * This file unit tests User.ts
 */

const u0 = new User({
  email: 'timtester@email.com',
  password: 'not-secure-password',
  verified: false
});
const u1 = new User({
  email: 'tinatester@email.com',
  password: 'still-a-non-secure-password',
  verified: true
});

beforeAll(async () => {
  await connect('test-user', false);
});

beforeEach(async () => {
  await User.insertMany([u0, u1]);
})

afterEach(async () => {
  await clean();
});

afterAll(async () => {
  await close();
});


/* TESTS */
describe('Email property', () => {
  /* get u0 by email */
  test('get by email', async () => {
    const u = await User.findOne({email: 'timtester@email.com'}).exec();
    expect(u).toBeDefined();
    expect(u).toHaveProperty('email', 'timtester@email.com');
  });

  /* change u1 email and get */
  test('update email', async () => {
    await User.findOneAndUpdate({email: 'tinatester@email.com'}, {email: 'newtinatester@email.com'});
    expect(await User.findOne({email: 'tinatester@email.com'}).exec()).toBeNull();
    const u = await User.findOne({email: 'newtinatester@email.com'}).exec();
    expect(u).toBeDefined();
    expect(u).toHaveProperty('email', 'newtinatester@email.com');
  });
});

describe('Password manipulation', () => {
  /* change u1 password */
  test('change password', async () => {
    const new_pass = 'this-is-not-secure';
    let u = await User.findOne({email: 'tinatester@email.com'}).exec();
    const old_pass = u?.password;
    if(u) u.password = new_pass;
    await u?.save();
    u = await User.findOne({email: 'tinatester@email.com'}).exec();
    expect(u?.password).not.toEqual(new_pass);
    expect(u?.password).not.toEqual(old_pass);
  });
});

describe('Verify', () => {
  test('verify underified user', async () => {
    let u = await User.findOne({email: 'timtester@email.com'}).exec();
    await u?.verify();
    u = await User.findOne({email: 'timtester@email.com'}).exec();
    expect(u?.verified).toBeTruthy();
  });

  test('verify verified user', async () => {
    let u = await User.findOne({email: 'tinatester@email.com'}).exec();
    await u?.verify();
    u = await User.findOne({email: 'tinatester@email.com'}).exec();
    expect(u?.verified).toBeTruthy();
  });
});