import express from "express";
import { userController } from "@/controllers/v1";

const userRouter = express.Router();

userRouter.get("/", userController.getUserDetails);
userRouter.put("/", userController.updateUserDetails);
userRouter.delete("/", userController.deleteUser);

export default userRouter;
