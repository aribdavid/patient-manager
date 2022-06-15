import Copyright from "./Copyright"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer(){
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
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