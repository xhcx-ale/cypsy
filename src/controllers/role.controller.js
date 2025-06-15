import { Role } from '../models/index.js'

const getRoles = async(req, res) => {
  const roles = await Role.find()
  res.json(roles)
}

const createRole = async (req, res) => {
  const role = req.body.role.toUpperCase()

  const roleDB = await Role.findOne( {role});

  if (roleDB) {
    return res.status(400).json({
      msg: `El role ${roleDB.role} ya existe!`,
    });
  }

  //data a guardar
  const data = {
    role,
    //usuario: req.user._id,
  };

  const nwrole = new Role(data);

  //db save
  await nwrole.save();

  res.status(201).json(nwrole);
};

export {
  createRole,
  getRoles,
}