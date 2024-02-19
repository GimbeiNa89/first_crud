import { Request, Response } from "express";
import { users } from "../data/user.data";
import { User } from "../types/user.type";
// import { v4 as uuidv4 } from "uuid"; non l'ho utilizzato ma è un modo valido per aggiungere un numero casuale

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const id = req.params.id;
  const userFound = users.find((user) => user.id === id);
  if (userFound) {
    res.status(200).json(userFound);
  } else {
    res.status(400).json({ message: "User not found" });
    throw new Error("User not found");
  }
};

export const addUserHandler = (req: Request, res: Response) => {
  const user: User = req.body;
  /**
 const newId = users.reduce((max, user) => Math.max(max, user.id), 0) + 1;
 oppure: user.push({ ...user, id: newId = uuidv4() });
 °metodo .reduce, math.max, push
 °metodo push, uuid
 °metodo push, Date.now
 */
  users.push({ ...user, id: Date.now().toString() });
  res.status(200).json(user);
};

export const deleteUserbyId = (req: Request, res: Response) => {
  const body = req.params.body;
  // const id = +req.params.id;
  const indexUserFound = users.findIndex((user) => user.id === req.params.id);
  if (indexUserFound !== -1) {
    res.status(200).json({
      message: "User deleted successfully",
      user: users[indexUserFound],
    });
    users.splice(indexUserFound, 0);
  } else {
    res.status(400).json({ message: "User not found" });
    throw new Error("User not found");
  }
};

export const updateUserHandler = (req: Request, res: Response) => {
  const newUser = req.body;
  const indexUserFound = users.findIndex((user) => user.id === req.params.id);
  if (indexUserFound !== -1) {
    Object.assign(users[indexUserFound], req.body);
    res.status(200).json({
      message: "User successfully modified",
      user: users[indexUserFound],
    });
  } else {
    res.status(400).json({ message: "User not found" });
    throw new Error("User not found");
  }
};
