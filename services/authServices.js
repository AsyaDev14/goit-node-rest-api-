import bcrypt from "bcrypt";

import User from "../models/User.js";

export const signup = async (data) => {
  const { password } = data;
  const hashPassword = await bcrypt.hash(password, 10);
  return User.create({ ...data, password: hashPassword });
};

export const setToken = async (id, token = "") =>
  User.findByIdAndDelete(id, { token });
