import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />}/>
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
