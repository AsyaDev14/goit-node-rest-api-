import { Schema, model } from "mongoose";
import { haveSaveError, setUpdateSetting } from "./hooks.js";
import { emailRegexp } from "../constants/regexp.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarUrl: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionkEY: false, timestamps: true }
);

userSchema.post("save", haveSaveError);
userSchema.pre("findOneandUpdate", setUpdateSetting);
userSchema.post("findOneandUpdate", haveSaveError);
const User = model("user", userSchema);
export default User;
