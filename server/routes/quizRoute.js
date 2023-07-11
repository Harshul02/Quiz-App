const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');

router.post('/create-quiz', async (req, res) => {
  try {
    const { title, questions } = req.body;

    const newQuiz = new Quiz({
      title,
      questions,
    });

    await newQuiz.save();

    res.status(200).json({
      success: true,
      message: 'Quiz created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Quiz creation failed',
      error: error.message,
    });
  }
});

router.get('/all-quizzes', async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.status(200).json({
        success: true,
        quizzes,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch quizzes.',
      });
    }
  });

  router.post('/get-quiz', async (req, res) => {
    try {
      const quizId = req.body.quizid;
      const quiz = await Quiz.findById(quizId);
      if (!quiz) {
        return res.status(404).json({ success: false, message: 'Quiz not found' });
      }
  
      return res.status(200).json({ success: true, quiz });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
module.exports = router;
