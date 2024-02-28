import { Router } from "express";
import {
  addUserHandler,
  getUsers,
  updateUserHandler,
  getUserById,
  deleteUserbyId,
} from "../controllers/user.controller";

export const router = Router();

router.get("/", getUsers);
router.post("/", addUserHandler);
router.patch("/:id", updateUserHandler);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserbyId);
