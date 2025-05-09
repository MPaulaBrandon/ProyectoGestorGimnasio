import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
