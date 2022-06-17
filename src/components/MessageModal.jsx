import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function MessageModal({refresher,buttonName, message}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        type='button' 
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
        <Button variant="contained" type='button' size='small' sx={{ position:'absolute', top:"1%", right: '1%', border:'1px solid #2596be' }} 
        onClick={refresher}>Close</Button> 
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
