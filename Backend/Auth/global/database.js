import {get} from './enviroment';
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    get('DATABASE_NAME'),
    get('DATABASE_NAME'),
    get('DATABASE_PASSWORD'),
    {
      host: 'localhost',
      dialect: 'postgres',
    },
);

export default sequelize;
