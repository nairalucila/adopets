const initComponents = require('../../../services/init-components');
const Model = require('./model');

const ModuleRegister = require('../../../config/module-register');

module.exports = initComponents([ModuleRegister.Database], (deps) => {
  const UserModel = Model.initModel(deps.Database);

  return {
    UserModel,
  };
});
