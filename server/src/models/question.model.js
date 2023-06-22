const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionId: { type: Number, required: true },
  questionTitle: { type: String, required: true },
  options: [{ type: String, required: true }],
  weightage: [{ type: Number, required: true }],
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = { Question };