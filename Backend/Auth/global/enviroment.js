import {config} from 'dotenv';

export const readENV = () => {
  config();
};

export const get = (envName = '') => {
  return process.env[envName];
};
