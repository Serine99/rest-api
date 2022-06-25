// import { v4 as uuidv4 } from "uuid";
import User from "../schemas/userSchema.js";

// let users = [];

export async function getUsersController(req, res) {
  // console.log(users);
  // res.send(users);
  const users = await User.find();
  return res.send({
    data: users,
  });
}
export async function CreateUserController(req, res) {
  const user = req.body;
  // const userId = uuidv4();
  // const userWithId = { ...user, id: userId };
  // users.push(userWithId);
  const savedUser = await User.create(user);
  // console.log(req.body);
  return res.status(201).send({
    data: savedUser,
  });
}

export async function getUserController(req, res) {
  // console.log(req.params);
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
}

export async function deleteUserController(req, res) {
  // const { id } = req.params;
  // users = users.filter((user) => user.id !== id);
  // res.send(`User with the id ${id} was deleted from the Database`);

  const requestQuery = req.query;
  const deletedUser = await User.deleteOne({
    _id: requestQuery._id,
  });
  console.log(deletedUser);
  return res.status(204).send(deletedUser);
}

export async function updateUserController  (req, res)  {
  // const { id } = req.params;
  // const { firstName, lastName, age } = req.body;
  // const user = users.find((user) => user.id === id);

  // if (firstName) {
  //   user.firstName = firstName;
  // }

  // if (lastName) {
  //   user.lastName = lastName;
  // }
  // if (age) {
  //   user.age = age;
  // }
  // res.send(`User with the id ${id} has been updated`);

  const requestQuery = req.query;
  const requestBody = req.body;
  const modifiedUser = await User.updateOne({
    _id: requestQuery._id,
  } ,{
    age:28
  });
  console.log(deletedUser);
  return res.status(204).send({message: "user is modified"});

};
