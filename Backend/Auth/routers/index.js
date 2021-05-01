const { Router } = require('express');
const router = Router();

//controller router
const {login} = require("../controllers/index.controller");
const {register} = require("../controllers/auth");

router.get('/login', login );
router.post('/register', register);

module.exports = router;