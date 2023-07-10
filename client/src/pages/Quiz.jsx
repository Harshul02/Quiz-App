import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuizNavbar from '../components/QuizNavbar';

const Quiz = () => {
  const params = useParams();
  const quizid = params.quizid;
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await axios.post('/api/quiz/get-quiz', { quizid });
      if (response.data.success) {
        setQuiz(response.data.quiz);
        initializeAnswers(response.data.quiz.questions);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const initializeAnswers = (questions) => {
    const initialAnswers = {};
    questions.forEach((question) => {
      initialAnswers[question._id] = [];
    });
    setAnswers(initialAnswers);
  };

  const handleAnswerChange = (questionId, option) => {
    setAnswers((prevAnswers) => {
      const selectedOptions = prevAnswers[questionId];
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option];
      return {
        ...prevAnswers,
        [questionId]: updatedOptions,
      };
    });
  };

  const submitQuiz = async () => {
    try {
      const response = await axios.post('/api/quiz/submit-quiz', {
        answers,
      });
      if (response.data.success) {
        setResult(response.data.result);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
        <QuizNavbar />
    
    <div className="container py-5">
    <div className="d-flex justify-content-end mb-5">
          <label htmlFor="name" className="me-2 mt-auto mb-auto">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control w-25"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
      {quiz ? (
        <>
          <h1 className='mb-4'>{quiz.title}</h1>
          {quiz.questions.map((question) => (
            <div key={question._id} className="mb-4">
              <h4>{question.question}</h4>
              {question.options.map((option) => (
                <div key={option} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={option}
                    name={question._id}
                    value={option}
                    checked={answers[question._id].includes(option)}
                    onChange={() => handleAnswerChange(question._id, option)}
                  />
                  <label className="form-check-label" htmlFor={option}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button onClick={submitQuiz} className="btn btn-primary">
            Submit Quiz
          </button>
        </>
      ) : (
        <p>Loading quiz...</p>
      )}
      {result && (
        <div>
          <h2>Quiz Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Quiz;
