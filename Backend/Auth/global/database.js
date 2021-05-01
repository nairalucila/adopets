const { get } = require('./enviroment');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  get('DATABASE_NAME'),
  get('USER_NAME'),
  get('DATABASE_PASSWORD'),
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

module.exports =  sequelize;
