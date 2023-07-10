import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const QuizSharing = () => {
  const params = useParams();
  const quizId = params.quizid;
  const [name, setName] = useState('');

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

  const handleCopyLink = () => {
    const quizLink = `${window.location.origin}/quiz/${quizId}`;
    navigator.clipboard.writeText(quizLink)
      .then(() => {
        alert('Quiz link copied to clipboard :)');
      })
      .catch((error) => {
        console.error('Failed to copy quiz link to clipboard:', error);
      });
  };

  return (
    <>
      <Navbar name={name} />
      <div className='container'>
        <h1 className='mt-4 mb-4'>Quiz Sharing Page</h1>
        <p className='fs-4'>Quiz ID: {quizId}</p>
        <p className='fs-5'>
          Share the quiz link with others: {window.location.origin}/quiz/{quizId}
        <button className='btn btn-primary mx-4' onClick={handleCopyLink}>Copy
        </button>
        </p>
      </div>
    </>
  );
};

export default QuizSharing;
