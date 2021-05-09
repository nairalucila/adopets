
// INIT ENV VARS
const {readENV} = require('../config/enviroment');
readENV();

// INIT DATABASE
const db = require('../config/database');
// INIT SERVER

const server = require('./server');
server.initServer()

