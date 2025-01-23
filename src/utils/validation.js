function validateAuth(email, password) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
  
    const emailRegex = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,4}$/; 
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
  }
  
  module.exports = { validateAuth };
  