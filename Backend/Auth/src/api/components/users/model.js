const {DataTypes} = require('sequelize');

function initModel(DatabaseInstance) {
  return DatabaseInstance.define(
      'User',
      {
      // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
      // Other model options go here
      },
  );
  User.sync();
  User.prototype.toJSON = function() {
    const values = Object.assign({}, this.get());

    delete values.password;
    return values;
  };
}

module.exports = initModel;
