import { Request, Response } from "express";

import { User } from "../models/user.interface";
import { users } from "../data/users";

export const getUserById = async (req: Request, res: Response) => {
try {
const id = +req.params.id;
const user = users.find(user => user.id === id);
res.status(200).json(user);
} catch (err: any) {
res.status(500).json({ error: err.message });
}
}

OPPURE:

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

---

export const addUserHandler = async(req: Request, res: Response) => {
try {
const user: User = req.body;
const newID = users.reduce((max, user) => Math.max(max, user.id), 0) + 1;
users.push({ ...user, id: newID });
res.status(200).json({ ...user, id: newID });
} catch (err: any) {
res.status(500).json({ error: err.message });
}
};

---

export const updateUserHandler = async(req: Request, res: Response) => {
try {
const id = +req.params.id;
const user = users.find(user => user.id === id);
if (user) {
Object.assign(user, req.body);
res.status(200).json(user);
} else {
res.status(404).json({ message: 'User not found' });
}
} catch (err: any) {
res.status(500).json({ error: err.message });
}
};

OPPURE:

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

---

export const deleteUserHandler = async(req: Request, res: Response) => {
try {
const id = +req.params.id;
const index = users.findIndex(user => user.id === id);
if (index !== -1) {
users.splice(index, 1);
res.status(200).json({ message: 'User deleted successfully' });
} else {
res.status(404).json({ message: 'User not found' });
}
} catch (err: any) {
res.status(500).json({ error: err.message });
}
}

OPPURE:

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

---

export const getUsers = async(req: Request, res: Response) => {
try{
const queryParams = req.query;

        let filteredUsers: User[] = [];

        if (queryParams.name) {
            const searchTerm = queryParams.name.toString().toLowerCase();
            filteredUsers = users.filter(user => user.name.first.toLowerCase().includes(searchTerm) || user.name.last.toLowerCase().includes(searchTerm));
        }

        if (queryParams.email) {
            const searchTerm = queryParams.email.toString().toLowerCase();
            filteredUsers = users.filter(user => user.email.toLowerCase().includes(searchTerm));
        }

        if (filteredUsers.length === 0) filteredUsers = users;

        res.status(200).json(filteredUsers);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }

}
