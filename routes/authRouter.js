import express from "express";
import authController from "../controllers/authController.js";
import validateBody from "../helpers/validateBody.js";
import {
  signUpSchema,
  signInSchema,
  verifySchema,
} from "../schemas/userSchema.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(signUpSchema), authController.signup);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
  "/verify",
  validateBody(verifySchema),
  authController.resendVerify
);

authRouter.post("/login", validateBody(signInSchema), authController.signin);

authRouter.get("/current", authenticate, authController.current);

authRouter.post("/logout", authenticate, authController.logout);
export default authRouter;
