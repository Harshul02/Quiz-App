const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
