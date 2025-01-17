const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');
const UsersService = require('./users.service');

async function register(email, password, firstName, lastName) {
  const existingUser = await UsersService.findUserByEmail(email);
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await UsersService.createUser(email, hashedPassword, firstName, lastName);
}

async function login(email, password) {
  const user = await UsersService.findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user.email);
  return { user: { email: user.email }, token };
}

module.exports = { register, login };
