const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  questionTitle: {
    type: String,
    required: true,
    min: 20,
    unique: true,
  },
  courseCode: {
    type: String,
    required: true,
    unique: true,
  },
  universityName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },

  insertPrice: {
    type: Number,
    required: true,
  },
  insertTagsHere: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  answer: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", postSchema);
