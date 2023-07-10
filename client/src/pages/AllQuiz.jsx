import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const AllQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    findUser();
    fetchQuizzes();
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

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get('/api/quiz/all-quizzes');
      if (response.data.success) {
        setQuizzes(response.data.quizzes);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Navbar name={name} />
      <Link to='/create-quiz'><button className='btn btn-primary text-light my-3 mx-3 float-end'>Create Quiz</button></Link>
      <div className="container py-5">
        <h2>All Quizzes</h2>
        <div className="row mt-5">
          {quizzes.map((quiz) => (
            <Link to={`/quizshare/${quiz._id}`}>
            <div className="col-md-4" key={quiz._id}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{quiz.title}</h5>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllQuiz;
