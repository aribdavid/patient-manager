import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import MessageModal from './MessageModal'
import { CardActions } from '@mui/material';


export default function EditForm({
  patientId,
  currentFirstName,
  currentLastName, 
  currentEmail, 
  currentAddress, 
  dateOfBirth}){
  const [value, setValue] = useState(
    new Date(dateOfBirth)
  )
  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const [email, setEmail] = useState(currentEmail);
  const [address, setAddress] = useState(currentAddress);

  function formatDate(receivedData){
    let data = receivedData,
        day  = data.getDate().toString().padStart(2, '0'),
        month  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year  = data.getFullYear();
    return month+"/"+day+"/"+year;
}

const updateForm = async (patientId,data) => {
  const url = `https://aribdavid-patient-manager-api.herokuapp.com/patient/${patientId}`;
  fetch(url, {   
    method: "PUT",
    body: JSON.stringify(data),     
    headers: {
        "Content-type": "application/json"
    }
})
.then(response => response.json()) 
}

const handleChange = (newValue) => {
  setValue(newValue);
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const date = formatDate(value)
  const patient = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    dateOfBirth: date,
    email: data.get('email'),
    address: data.get('address'),
  }
  await updateForm(patientId,patient);
};

const refreshPage = ()=>{
  window.location.reload();
}
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
    <Box>
    <Typography component="h1" variant="h4">
      Edit Patient
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
      </Grid>
      <br/>
     <CardActions sx={{justifyContent: 'center'}}>
     <MessageModal      
        sx={{ mt: 3, mb: 2 }}
        refresher={refreshPage} 
        buttonName='Finish' 
        message='User Updated Successfully!' 
        type='submit'
        />
     </CardActions>
    </Box>
  </Box>
  </Container>
  )
}