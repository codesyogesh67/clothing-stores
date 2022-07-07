import React from 'react'
import {
    HeaderLinksContainer,
    PersonIcon,
    CartIcon,
    HomeLinkIcon,
    BoxContainer

} from "../HeaderElements";
import { selectUser, logout } from "../../../features/auth/authSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { IconButton, Badge, Modal, Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { selectCart } from '../../../features/cart/cartSlice';



function HeaderLinks() {
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(selectCart);

    const logoff = () => {
        dispatch(logout())
        setOpen(false)

    }
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <HeaderLinksContainer>
            {user === null ? (
                <Link to="/signin">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                </Link>
            ) : (
                    <IconButton onClick={handleOpen}>
                        <PersonIcon style={{ color: "green" }} />
                    </IconButton>
                )}

            <Link to="/cart">
                <IconButton>
                    <Badge badgeContent={user && cart.length} color="primary">
                        <CartIcon />
                    </Badge>
                </IconButton>
            </Link>

            <Link to="/">
                <IconButton>
                    <HomeLinkIcon />
                </IconButton>
            </Link>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <BoxContainer>
                    <Box sx={{
                        background: "white",
                        padding: "2rem",
                        borderRadius: "10px"
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are you sure you want to sign off ?
    </Typography>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            padding: "1rem"
                        }}>
                            <Button variant="outlined" onClick={logoff}>Yes</Button>
                            <Button variant="outlined" onClick={() => setOpen(false)}>Go back</Button>
                        </Box>
                    </Box>
                </BoxContainer>
            </Modal>

        </HeaderLinksContainer>
    )
}

export default HeaderLinks
