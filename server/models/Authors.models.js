const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    book: {
      type: String,
      required: [true, "An author needs a book!"],
      minlength: [3, "Must be at least 3 characters"],
    },
    name: {
      type: String,
      required: [true, "What is the Author's name?"],
      minlength: [3, "Must be at least 3 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);
