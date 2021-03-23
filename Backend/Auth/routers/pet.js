import {Router} from 'express';
import {create} from '../controllers/pet.controller';


// eslint-disable-next-line new-cap
const router = Router();

router.post('/pet', create);

module.exports = router;
