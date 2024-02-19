import { Router } from "express";
import {
  addUserHandler,
  deleteUserbyId,
  getUserById,
  getUsers,
  updateUserHandler,
} from "../controllers/user.controller";

export const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUserHandler);
router.delete("/:id", deleteUserbyId);
router.patch("/:id", updateUserHandler);
