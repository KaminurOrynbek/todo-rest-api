const { register: registerService, login: loginService } = require('../services/auth.service');
const { validateAuth } = require('../utils/validation');

async function register(req, res, next) {
  try {
    const { email, password, firstName, lastName } = req.body;
    validateAuth(email, password);
    await registerService(email, password, firstName, lastName);
    res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    validateAuth(email, password);
    const token = await loginService(email, password);
    res.status(200).json(token);
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login };
