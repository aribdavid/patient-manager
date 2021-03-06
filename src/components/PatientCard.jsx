import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardModal from './CardModal'


export default function PatientCard({card}){
  return(
    <Grid item xs={12} sm={6} md={4}>
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
          <b>{card.first_name}</b>
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          Idade:
          {' '}
          <b>{ new Date().getFullYear() - card.date_of_birth.split('-')[0]}</b>     
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: 'flex-end' }}>
        <CardModal  title={"More Details"} patient={card}/>
      </CardActions>
    </Card>
  </Grid>
  )
}