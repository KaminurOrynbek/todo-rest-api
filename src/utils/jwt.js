const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

function generateToken(email) {
  return jwt.sign({ email }, SECRET, { expiresIn: '1h' });
}

module.exports = { generateToken };
