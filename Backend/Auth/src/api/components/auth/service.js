const User = require('../users/model');
const validator = require('validator');
const bcrypt = require('bcrypt');

/**
 * Validate user instance
 * @param {object} user User Data access object DAO
 */
function validateUser(user) {
  if (!validator.isEmail(user.email)) {
    throw new Error('Invalid email');
  }
}
/**
 * Instance a user object from the database
 * @param {object} body request body
 * @return {object} user Dao from database
 */
function instanceUser(body) {
  const user = User.build(body);
  validateUser(user);
  return user;
}

/**
 * Encrypt the password in the user
 * @param {object} user a dao from User entity
 */
async function encryptPassword(user) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
  } catch (e) {
    throw new Error('bcrypt.hash error');
  }
}

module.exports = {
  instanceUser,
  encryptPassword,
};
