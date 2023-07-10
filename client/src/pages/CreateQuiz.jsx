import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const CreateQuiz = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    findUser();
  }, []);

  const findUser = async () => {
    try {
      const id = localStorage.getItem('token');
      const response = await axios.post('/api/admin/get-admin', {
        id,
      });
      if (response.data.success) {
        const adminName =
          response.data.data.firstname + ' ' + response.data.data.lastname;
        setName(adminName);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '']);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [quizCreated, setQuizCreated] = useState(false);

  const handleAddQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options: currentOptions,
      correctAnswers,
    };
    setQuestions([...questions, newQuestion]);
    console.log(questions);
    console.log(newQuestion);
    setCurrentQuestion('');
    setCurrentOptions(['', '', '']);
    setCorrectAnswers([]);
  };

  const handleCreateQuiz = () => {
    setQuizCreated(true);
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...currentOptions];
    updatedOptions[index] = e.target.value;
    setCurrentOptions(updatedOptions);
  };

  return (
    <>
      <Navbar name={name} />
      <div className="container py-5">
        {quizCreated ? (
          <p className="alert alert-success">Quiz created successfully!</p>
        ) : (
          <div>
            <h2>Create a Quiz</h2>
            <hr />
            <div className="mb-4 my-2">
            <h4>Enter Title</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {questions.map((q, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Question: {q.question}</h5>
                  <p className="card-text">Options: {q.options.join(', ')}</p>
                  <p className="card-text">
                    Correct Answers: {q.correctAnswers.join(', ')}
                  </p>
                </div>
              </div>
            ))}
            <div className="mb-3">
            <h4>Question</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Question"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
              />
              {currentOptions.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  className="form-control mt-2"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(e, index)}
                />
              ))}
            </div>
            <div className="mb-3">
              <h3>Correct Answers</h3>
              <div className="form-check">
                {currentOptions.map((option, index) => (
                  <div key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={String.fromCharCode(65 + index)}
                      checked={correctAnswers.includes(
                        String.fromCharCode(65 + index)
                      )}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCorrectAnswers([
                            ...correctAnswers,
                            String.fromCharCode(65 + index),
                          ]);
                        } else {
                          setCorrectAnswers(
                            correctAnswers.filter(
                              (answer) =>
                                answer !== String.fromCharCode(65 + index)
                            )
                          );
                        }
                      }}
                    />
                    <label className="form-check-label">
                      {String.fromCharCode(65 + index)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddQuestion}
            >
              Add Question
            </button>
            <br />
            <button
              type="button"
              className="btn btn-primary float-end mt-2"
              onClick={handleCreateQuiz}
            >
              Create Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateQuiz;
