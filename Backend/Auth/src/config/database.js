const {get} = require('./enviroment');
const {Sequelize} = require('sequelize');

let db = {};
try {
  db = new Sequelize(
      get('DATABASE_NAME'),
      get('USER_NAME'),
      get('DATABASE_PASSWORD'),
      {
        host: 'localhost',
        dialect: 'postgres',
      },
  );
} catch (error) {
  console.log(error);
}

module.exports = db;
