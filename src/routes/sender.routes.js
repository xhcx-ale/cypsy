import { Router } from 'express'
import { sender } from '../controllers/index.js'

const router = Router()

router.post('/', sender)

export default router