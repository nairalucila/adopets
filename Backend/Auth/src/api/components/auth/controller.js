// const express = require('express');
const {instanceUser, encryptPassword} = require('./service');

/**
 * Login a new user in to app
 * @param {object} req Request obj
 * @param {object} res Request obj
 */
function loginController(req, res) {
  res.send('hello world');
}

/**
 *  Register a new User entity into the database
 * @param {e.Request} req
 * @param {e.Response} res
 * @return {Promise<Response>} express return object
 */
async function registerController(req, res) {
  let user;
  try {
    user = instanceUser(req.body);
  } catch (error) {
    return res.sendStatus(400);
  }

  try {
    encryptPassword(user);
    await user.save();
  } catch (e) {
    return res.sendStatus(500);
  }

  res.status(201).json(user);
}

module.exports = {
  loginController,
  registerController,
};
