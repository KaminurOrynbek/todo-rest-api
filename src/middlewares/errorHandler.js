const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
 
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  res.status(500).json({ error: err.message || 'Internal Server Error' });
};
