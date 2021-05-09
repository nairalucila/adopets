const {Router} = require('express');
// eslint-disable-next-line new-cap
const router = Router();
const {loginController, registerController} = require('./controller');

router.post('/login', loginController).post('/register', registerController);

module.exports = router;
