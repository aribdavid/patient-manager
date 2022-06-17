import Header from "../components/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";




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
          <Grid container spacing={4}>
            {data.length > 0 && data.map((card, index) => (
             <CardGrid card={card} key={index}  />
            ))}
          </Grid>
        </Container>
        <Footer />
    </ThemeProvider>  
  )
}