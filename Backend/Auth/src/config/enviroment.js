const { config } = require('dotenv');

const readENV = () => {
  config();
};

const get = (envName = '') => {
  return process.env[envName];
};

module.exports = {
  readENV,
  get
}