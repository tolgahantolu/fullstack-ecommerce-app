import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  popular: {
    type: Boolean,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("category", categorySchema);
