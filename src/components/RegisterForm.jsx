import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';
import React, { useEffect } from 'react';
import Header from './Header';


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

export default function RegisterForm() {
  
  const [value, setValue] = React.useState(
    new Date('2014-08-18T21:11:54'),
  );

  // formats full data to MM/DD/YYYY
  function formatDate(receivedData){
    let data = receivedData,
        day  = data.getDate().toString().padStart(2, '0'),
        month  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year  = data.getFullYear();
    return month+"/"+day+"/"+year;
}

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = formatDate(value)
    console.log({
      email: data.get('email'),
      name: `${data.get("firstName")} ${data.get("lastName")}` ,
      address: data.get('address'),
      dateOfBirth: date
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <img src={require('../resources/logo1.png')} width="40px" alt='logo' />
          </Avatar>
          <Typography component="h1" variant="h4">
            Registration Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item xs={12}>  
                  <MobileDatePicker
                  label="dateOfBirth"
                  inputFormat="MM/dd/yyyy"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                    />
                </Grid>
              </LocalizationProvider>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="Full Address"
                    type="address"
                    id="address"
                  />
                </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree with all terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/browse" variant="body2">
                  Already registered? Browse patients here
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}