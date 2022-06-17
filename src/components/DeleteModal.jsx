import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

export default function DeleteModal({patientId,type,buttonName, message}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteForm = async (id) => {
    const url = `https://aribdavid-patient-manager-api.herokuapp.com/patient/${id}`;
    fetch(url, {   
      method: "DELETE",  
  })
  }
  
  const refreshPage = ()=>{
    window.alert('Usuario Deletado com Sucesso');
    window.location.reload();
  }

  return (
    <div>
      <Button 
        type={type} 
        fullWidth
        variant="contained" size="small" onClick={handleOpen}>
          {buttonName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
          <CardActions>
          <Button variant="contained" type='button' size='small'
        onClick={()=>{deleteForm(patientId); refreshPage() } }>Sim</Button> 
        <Button variant="contained" type='button' size='small' 
        onClick={handleClose}>Não</Button> 
        </CardActions>
        </Box>
      </Modal>
    </div>
  );
}
