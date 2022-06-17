import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import EditForm from './EditForm';



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
      <Button size="small" onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button variant="contained" size='small' sx={{ position:'absolute', top:"1%", right: '1%', border:'1px solid #2596be' }} 
        onClick={() =>{setEdit(false); handleClose() }}>Close</Button> 
        {edit === true ? 
        <EditForm 
        name={patient.name} 
        currentEmail={patient.email}
        currentAddress={patient.address}
        dateOfBirth={patient.date_of_birth}
        /> : <Card>
          <CardContent >
                    <Typography gutterBottom variant="h4" component="h1">
                      Full Name: 
                      {' '}
                      {patient.first_name}
                      {' '}
                      {patient.last_name}
                    </Typography>
                    <Typography>
                      Date of Birth:
                      {' '}
                    {patient.date_of_birth.split("T")[0]}
                    </Typography>
                    <Typography>
                    Email: 
                    {' '}
                    {patient.email}
                    </Typography>
                    <Typography>
                      Address:
                      {' '}
                    {patient.address}
                    </Typography>
                  </CardContent>
                  <Button onClick={() =>setEdit(true)} size="small">Edit</Button>
        </Card>
        }
        </Box>
      </Modal>
     </div>
  );
}