import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import React, { useState } from 'react';



export default function EditForm(){
  const [value, setValue] = useState(
    new Date('2022-08-18T21:11:54'),
  )
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  function formatDate(receivedData){
    let data = receivedData,
        day  = data.getDate().toString().padStart(2, '0'),
        month  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year  = data.getFullYear();
    return month+"/"+day+"/"+year;
}

const postForm = async (data) => {
  
  const url = 'https://aribdavid-patient-manager-api.herokuapp.com/patient';
  fetch(url, {   
    method: "POST",
    body: JSON.stringify(data),     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json()) 
.then(json => console.log(json));
}

const handleChange = (newValue) => {
  setValue(newValue);
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const date = formatDate(value)
  await postForm({
    email: data.get('email'),
    name: `${data.get("firstName")} ${data.get("lastName")}` ,
    address: data.get('address'),
    dateOfBirth: date
  });
  setFirstName('');
  setLastName('')
  setEmail('');
  setAddress('');
  setValue(new Date('2022-08-18T21:11:54'));
};


  return (
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    <img src={require('../resources/images/logo1.png')} width="40px" alt='logo' />
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
            onChange={({target}) => setFirstName(target.value)}
            value={firstName}
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
            value={lastName}
            onChange={({target}) => setLastName(target.value)}
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
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item xs={12}>  
            <MobileDatePicker
            label="Date of Birth"
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
              value={address}
              onChange={({target}) => setAddress(target.value)} 
              name="addess"
              label="Full Address"
              type="address"
              id="address"
            />
          </Grid>
          <Grid item xs={12}>
          <Typography component="h6" variant="h7">
      Choose your profile picture
      </Typography>     
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input type='file' id="myFile" hidden />
          </Button>  
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
  )
}