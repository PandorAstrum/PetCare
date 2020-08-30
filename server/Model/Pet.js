const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  categories: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: [String],
  },
  likes: {
    type: Number,
    default: 0,
  },
  OwnedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refs: "User",
  },
  messages: [
    {
      messageBody: {
        type: String,
        required: true,
        trim: true,
      },
      messageBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refs: "User",
      },
      messageDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Pet", PetSchema);
