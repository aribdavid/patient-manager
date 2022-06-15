import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate()

  return(
    <AppBar color="quaternary" position="relative">
        <Toolbar>
          <img onClick={() => navigate('/home')} src={require('../resources/logo1.png')} width="65px" alt='logo' />
          <h1 onClick={() => navigate('/home')} >medcloud </h1>
        </Toolbar>
    </AppBar>
  )
}