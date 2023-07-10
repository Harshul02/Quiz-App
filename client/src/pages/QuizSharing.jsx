import React from 'react'
import { useParams } from 'react-router-dom';

const QuizSharing = () => {
    const { quizId } = useParams();

  return (
    <div>
      <h1>Quiz Sharing Page</h1>
      <p>Quiz ID: {quizId}</p>
      <p>
        Share the quiz link with others: {window.location.origin}/quiz/{quizId}
      </p>
    </div>
  )
}

export default QuizSharing;
