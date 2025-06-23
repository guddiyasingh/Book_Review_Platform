// models/Book.js
const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  rating: Number,
});
module.exports = mongoose.model('Book', BookSchema);

// models/Review.js
const ReviewSchema = new mongoose.Schema({
  bookId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  review: String,
  rating: Number,
});
