import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Signup';
import CreateQuiz from './pages/CreateQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/create-quiz' element={<CreateQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;