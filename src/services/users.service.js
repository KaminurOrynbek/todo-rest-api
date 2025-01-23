const User = require('../models/user.model');

async function createUser(email, password, firstName, lastName) {
  const user = new User({ email, password, firstName, lastName });
  await user.save();
}

async function findUserByEmail(email) {
  return User.findOne({ email });
}

function getAllUsers() {
  return User.find();
}

module.exports = { createUser, findUserByEmail, getAllUsers };