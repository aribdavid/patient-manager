import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Header(){
  return(
    <AppBar color="quaternary" position="relative">
        <Toolbar>
          <img src={require('../resources/logo1.png')} width="65px" alt='logo' />
          <h1>medcloud </h1>
        </Toolbar>
      </AppBar>
  )
}