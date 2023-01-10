import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      default: null,
    },
    surname: {
      type: String,
      trim: true,
      required: true,
      default: null,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { collection: "users" }
);

export default mongoose.model("user", userSchema);
