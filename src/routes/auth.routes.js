const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { getAllUsers } = require('../services/users.service');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/users', (req, res) => {
  const users = getAllUsers();
  res.json(users);
});

module.exports = router;
