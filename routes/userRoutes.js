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

router.get("/", getUserController);

router.delete("/", deleteUserController);

router.put("/", updateUserController);

export default router;
