import { Router } from 'express'
import { createRole, getRoles } from '../controllers/index.js'
import { admRole, hvaRole, jwtVal } from "../middlewares/index.js";

const router = Router()

router.get('/', getRoles)
router.post('/', [
  jwtVal,
  admRole,
  createRole,
  ])

export default router