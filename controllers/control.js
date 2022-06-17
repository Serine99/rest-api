import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsersController = (req, res) => {
  // console.log(users);
  res.send(users);
};
export const CreateUserController = (req, res) => {
  const user = req.body;

  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  // console.log(req.body);
  res.send(`User with the name ${user.firstName} added to the Database`);
};

export const getUserController = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUserController = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} was deleted from the Database`);
};

export const updateUserController = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id ${id} has been updated`);
};
