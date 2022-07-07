import React from "react";
import { Modal, Box, Typography, Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { logout } from "../../../features/auth/authSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  paddingTop: "10px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ModalBox({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signOut();
    dispatch(logout());
    handleClose();
    navigate("/");
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to sign out ?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleSignout} variant="outlined" color="error">
              Sign out
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
          </Stack>
        </Typography>
      </Box>
    </Modal>
  );
}

export default ModalBox;
