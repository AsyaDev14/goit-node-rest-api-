import Joi from "joi";
import { emailRegexp } from "../constants/regexp.js";

export const signUpSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
export const signInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
