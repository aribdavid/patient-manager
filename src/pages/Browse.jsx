import Header from "../components/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardModal from '../components/CardModal'
import { useEffect, useState } from 'react';




const theme = createTheme({
  palette: {
    primary: {
      main: '#2596be', 
    },
    secondary: {

      main: '#002639',
     
    },
    terciary: {
    
      main: "#7f7f7f",
     
    },
    quaternary: {  
      main: '#ffffff',
     
    },
  }
});

export default function Browse(){

  const [data, setData ] = useState([]);

  
   useEffect( () => {
    fetchPatients()
    .then((res) => setData(res));
  }, [])

  const fetchPatients = async () => {
    const url = 'https://aribdavid-patient-manager-api.herokuapp.com/patient';
    const response = await fetch(url)
    .then((data) => data.json());
    return response;
  }

  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.length > 0 && data.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    src={require('../resources/images/profile-default.jpeg')}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name: 
                      {' '}
                      {card.name.split(' ')[0]}
                    </Typography>
                    {/* <Typography>
                      Date of Birth:
                      {' '}
                    {card.date_of_birth.split("T")[0]}
                    </Typography>
                    <Typography>
                    Email: 
                    {' '}
                    {card.email}
                    </Typography>
                    <Typography>
                      Address:
                      {' '}
                    {card.address}
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <CardModal title={"View"} patient={card}/>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </ThemeProvider>  
  )
}