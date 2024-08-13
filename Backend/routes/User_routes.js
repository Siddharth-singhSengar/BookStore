import express from 'express'

import { signUp ,login} from '../controller/Usercontroller.js'

const router = express.Router();

router.post('/signup', signUp)
router.post('/login', login)

export default router