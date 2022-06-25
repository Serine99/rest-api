import express from "express";
import {
  CreateUserController,
  getUserController,
  deleteUserController,
  updateUserController,
  getUsersController,
} from "../controllers/userController.js";

const router = express.Router();

// All routes in here are starting with /users
router.get("/", getUsersController);

router.post("/", CreateUserController);

router.get("/:id", getUserController);

router.delete("/:id", deleteUserController);

router.put("/:id", updateUserController);

export default router;
