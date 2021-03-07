const { Router } = require('express');
const router = Router();

//controller router
const {dashboard} = require("../controllers/index.controller");

router.get('/', dashboard );

module.exports = router;