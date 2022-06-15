import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Browse from './pages/Browse';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/browse' element={<Browse />} />
    </Routes>
  );
}

export default App;
