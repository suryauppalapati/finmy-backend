import express from "express";
import { authController as auth } from "@/controllers/v1";
import { requestValidator } from "@/validators/request.validator";
import { signInSchema, signUpSchema } from "@/schema/auth.schema";

const authRouter = express.Router();

authRouter.post("/signin", requestValidator(signInSchema), auth.signinUser);
authRouter.post("/signup", requestValidator(signUpSchema), auth.signupUser);

export default authRouter;
