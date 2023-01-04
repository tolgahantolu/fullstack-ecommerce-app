import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  kit: {
    type: Boolean,
    required: true,
    trim: true,
    default: false,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("food", foodSchema);
