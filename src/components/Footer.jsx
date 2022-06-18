import Copyright from "./Copyright"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Footer(){
  const navigate = useNavigate()

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography onClick={() => navigate('/home')} id='footer' variant="h6" align="center" gutterBottom>
          MedCloud
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >        
          Connectivity and Management for Exams and Reports
        </Typography>
        <Copyright />
      </Box>
  )
}