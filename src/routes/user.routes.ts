import { Router } from "express";
import { addUserHandler, getUsers } from "../controllers/user.controller";

export const router = Router();

router.get("/", getUsers);
router.post("/", addUserHandler);
/*
router.get("/:id", getUserById);
router.delete("/:id", deleteUserbyId);
router.patch("/:id", updateUserHandler);
*/
