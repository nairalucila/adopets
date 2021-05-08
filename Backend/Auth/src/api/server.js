const express = require('express');
const app = express();
const port = 3000;
const middlewares = require('./middleware');



module.exports = {
  initServer: function () {
    // middlewares
    app.use(...middlewares);

    // routes
    app.use(require('./routes'));


    //port
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });

  }
}