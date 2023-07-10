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

module.exports = router;
