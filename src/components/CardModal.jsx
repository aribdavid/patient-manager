import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CardModal({patient, title}) {
  const [open, setOpen] = React.useState(false);
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
        <Button onClick={handleClose}>X</Button> 
        <CardContent >
                    <Typography gutterBottom variant="h4" component="h1">
                      Full Name: 
                      {' '}
                      {patient.name}
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
                  <Button size="small">Edit</Button>
        </Box>
      </Modal>
     </div>
  );
}