const express = require('express');
const {readENV} = require('./global/enviroment');
const app = express();
const port = 3000;

// initialize env vars
readENV();

// router configuration
app.use(require('./routers/index'));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
