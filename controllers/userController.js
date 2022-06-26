import User from "../schemas/userSchema.js";

export async function getUsersController(req, res) {
  const users = await User.find();
  return res.send({
    data: users,
  });
}
export async function CreateUserController(req, res) {
  const user = req.body;

  const savedUser = await User.create(user);
  // console.log(req.body);
  return res.status(201).send({
    data: savedUser,
  });
}

export async function getUserController(req, res) {
  const id = req.query;
  const getOneUser = await User.findOne({
    _id: id._id,
  });
  console.log(getOneUser);
  return res.status(201).send();
}

export async function deleteUserController(req, res) {
  const id = req.query;
  const deletedUser = await User.deleteOne({
    _id: id._id,
  });
  console.log(deletedUser);
  return res.status(204).send(deletedUser);
}

export async function updateUserController(req, res) {
  const id = req.query;
  const requestBody = req.body;
  const modifiedUser = await User.updateOne(
    {
      _id: id._id,
    },
    { age: 28 }
  );
  console.log(modifiedUser);
  return res.status(204).send({});
}
