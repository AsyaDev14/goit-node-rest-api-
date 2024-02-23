import { Schema, model } from "mongoose";
import { haveSaveError, setUpdateSetting } from "./hooks.js";

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
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
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
