import { usrGet, usrPost, usrPut, usrPatch, usrDelete } from './admusr.controller.js'
import login from './auth.controller.js'
import {
  getDork,
  createDork,
  updateDork,
  deleteDork,
} from './dork.controller.js'
import { createRole, getRoles } from './role.controller.js'

export {
  login,
  usrGet, 
  usrPost, 
  usrPut, 
  usrPatch, 
  usrDelete,
  getDork,
  createDork,
  updateDork,
  deleteDork,
  createRole,
  getRoles,
}