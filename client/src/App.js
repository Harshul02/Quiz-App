import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Signup';
import CreateQuiz from './pages/CreateQuiz';
import QuizSharing from './pages/QuizSharing';
import AllQuiz from './pages/AllQuiz';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/create-quiz' element={<CreateQuiz />} />
        <Route exact path='/all-quiz' element={<AllQuiz />} />
        <Route exact path='/quizshare/:quizid' element={<QuizSharing />} />
        <Route exact path='/quiz/:quizid' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
