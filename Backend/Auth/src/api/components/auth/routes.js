const { Router } = require('express');
const router = Router();
const { loginController,
    registerController } = require('./controller')

router.post('/login', loginController).post('/register', registerController)


module.exports = router;