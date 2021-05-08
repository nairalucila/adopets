const { Router } = require('express');
const router = Router();

router.use(require('./components/auth/routes'));



module.exports = router;