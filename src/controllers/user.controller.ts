import { Request, Response } from "express";
import { users } from "../data/user.data";
import { IUser } from "../types/user.type";
import {
  createUser,
  showUserById,
  showUsers,
  updateUserById,
  deleteUser,
} from "../services/users.service";
// import { v4 as uuidv4 } from "uuid"; non l'ho utilizzato ma è un modo valido per aggiungere un numero casuale

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await showUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "collection empty", error: error });
    message: error;
  }
};

export const addUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json({ message: "User added successfully", user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const newUser = await updateUserById(req.params.id, req.body);
  try {
    res.status(200).json({
      message: "User successfully modified",
      newUser,
    });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
    // res.status(400).json({ message: "Server problem" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // console.log('req.body', req.body);
    // console.log('req.headers', req.headers); per trovare i parametri di request da parte dell'utente (serve per autenticazione)
    const userFound = await showUserById(id);
    if (userFound) {
      res.status(200).json({ message: "User found successfully", userFound });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    if (error instanceof Error) {
      // modo per intercettare un nuovo errore visto che il null era contemplato.
      res.status(404).json({ message: "User not found" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUserbyId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // const id = +req.params.id;
    const userFound = await deleteUser(id);
    res.status(200).json({
      message: "User deleted successfully",
      user: users[users.length],
    });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
    throw new Error("User not found");
  }
};

// rabase è l'inserimento della branch secondaria nel ramo principale considerando che il ramo principale sia andato avanti anche lui nello sviluppo
// merge è l'inserimento... con il ramo principale invece che si è fermato nel momento in cui sei andato nel ramo secondario
// la promise è un oggetto che viene fuori da una chiamata/operazione e deve ricevere qualcosa.
// la puoi usare nelle funzioni asincrone.
