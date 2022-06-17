import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import EditForm from './EditForm';
import DeleteModal from './DeleteModal'
import { CardActions } from '@mui/material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function CardModal({patient, title}) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button type='button' size="small" onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
   
        {edit === true ? 
        <>
        <Button variant="contained" type='button' size='small' sx={{ position:'absolute', top:"1%", right: '1%', border:'1px solid #2596be' }} 
        onClick={() =>{setEdit(false)}}>Back</Button> 
        <EditForm 
        patientId={patient.id}
        currentFirstName={patient.first_name} 
        currentLastName={patient.last_name}
        currentEmail={patient.email}
        currentAddress={patient.address}
        dateOfBirth={patient.date_of_birth}
        /> 
        </>
         : <Card>
          <CardContent >
          <Button variant="contained" type='button' size='small' sx={{ position:'absolute', top:"1%", right: '1%', border:'1px solid #2596be' }} 
        onClick={() =>{setEdit(false); handleClose() }}>Back</Button> 
                    <Typography gutterBottom variant="h4" component="h1">
                      Full Name: 
                      {' '}
                      <b>{patient.first_name}</b>
                      {' '}
                      <b>{patient.last_name}</b> 
                    </Typography>
                    <Typography>
                      Date of Birth:
                      {' '}
                    <b>{patient.date_of_birth.split("T")[0]}</b>
                    </Typography>
                    <Typography>
                    Email: 
                    {' '}
                    <b>{patient.email}</b>
                    </Typography>
                    <Typography>
                      Address:
                      {' '}
                    <b>{patient.address}</b>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button type='button' variant="outlined" onClick={() =>setEdit(true)} size="small">Edit</Button>
                  <DeleteModal buttonName='Delete' type='button' patientId={patient.id} message={`Are you sure you want to delete user ${patient.first_name}?`} />
                  </CardActions>
        </Card>
        }
        </Box>
      </Modal>
     </div>
  );
}