import {DataTypes} from 'sequelize';

import DB from '../global/database';

const Pet = DB.define(
    'Pet',
    {
    // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      // allowNull defaults to true
      },
      gander: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
    // Other model options go here
    },
);

export default Pet;
