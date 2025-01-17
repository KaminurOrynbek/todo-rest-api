const users = [];

async function createUser(email, password, firstName, lastName) {
  users.push({ email, password, firstName, lastName }); 
}

async function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function getAllUsers() {
  return users;
}

module.exports = { createUser, findUserByEmail, getAllUsers };
