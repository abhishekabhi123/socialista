import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    userauth: { type: String, required: true, unique: true }, //*Only one email per user
    password: { type: String, required: true },
    imageprofile: { type: String, required: true },
    imagecover: { type: String, required: true },
    followings: { type: Array, default: [] },
    followers: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
export default User;
