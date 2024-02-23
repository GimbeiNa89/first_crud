import { Request, Response } from "express";
// import { users } from "../data/user.data";
import { IUser } from "../types/user.type";
import { createUser, showUsers } from "../services/users.service";
// import { v4 as uuidv4 } from "uuid"; non l'ho utilizzato ma è un modo valido per aggiungere un numero casuale

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await showUsers();
    res.status(200).json(users);
  } catch (error) {
    message: error;
  }
};

export const addUserHandler = async (req: Request, res: Response) => {
  try {
    const user: IUser = await createUser(req.body);
    res.status(200).json({ message: "User added successfully", user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
/*
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


export const deleteUserbyId = (req: Request, res: Response) => {
  const body = req.params.body;
  // const id = +req.params.id;
  const indexUserFound = users.findIndex((user) => user.id === req.params.id);
  if (indexUserFound !== -1) {
    res.status(200).json({
      message: "User deleted successfully",
      user: users[indexUserFound],
    });
    users.splice(indexUserFound, 1);
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
*/
// rabase è l'inserimento della branch secondaria nel ramo principale considerando che il ramo principale sia andato avanti anche lui nello sviluppo
// merge è l'inserimento... con il ramo principale invece che si è fermato nel momento in cui sei andato nel ramo secondario
