const { Router } = require('express');
const router = Router();

//controller router
const {login} = require("../controllers/index.controller");
const {register} = require("../controllers/index.controller");

router.get('/login', login );
router.post('/register', register);

module.exports = router;