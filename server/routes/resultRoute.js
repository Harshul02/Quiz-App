const express = require('express');
const router = express.Router();
const QuizResult = require('../models/resultModel');
const Quiz = require('../models/quizModel');


router.post('/submit-quiz', async (req, res) => {
    const { answers, name } = req.body;
    console.log(name);
  
    try {
      const result = await calculateQuizResult(answers);
      const quizResult = new QuizResult({
        name,
        result,
      });
      await quizResult.save();
  
      res.json({ success: true, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to submit the quiz.' });
    }
  });
  

  const calculateQuizResult = async (answers) => {
    let correctAnswers = 0;
  
    for (const questionId in answers) {
      const selectedOptions = answers[questionId];
      const question = await findQuestionById(questionId);

      if (question) {
        const correctOptions = question.questions[0].correctAnswers;
        if (
          Array.isArray(selectedOptions) &&
          Array.isArray(correctOptions) &&
          selectedOptions.length > 0 &&
          correctOptions.length > 0
        ) {
          const isCorrect = selectedOptions.every((option) =>
            correctOptions.includes(option)
          );
          if (isCorrect) {
            correctAnswers++;
          }
        }
      }
    }
    console.log(correctAnswers);
  
    const totalQuestions = Object.keys(answers).length;
    const resultPercentage = (correctAnswers*100 / totalQuestions);
  
    return resultPercentage;
  };
  
  
  
  const findQuestionById = (questionId) => {
    return Quiz.findOne({ 'questions._id': questionId }).select('questions.$').exec();
  };

  module.exports = router;

