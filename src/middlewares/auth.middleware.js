const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET; 

function authenticate(req, res, next) {
  const token = req.headers.authorization; 

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded.email; 
    next(); 
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = { authenticate };
