import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Browser from './pages/Browser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/browse' element={<Browser />} />
    </Routes>
  );
}

export default App;
