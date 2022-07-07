import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme, createTheme } from '@mui/material/styles';
import { Toolbar, IconButton, Breadcrumbs, Link as LinkMUI } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectDrawer, updateDrawer } from '../../../../features/products/productsSlice';
import { IconContainer } from '../ProductsListElements';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { selectLinkHeader } from '../../../../features/links/linksSlice';


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    position: "static",
    backgroundColor: "transparent",
    elevation: 0,
    color: "black",
    ...(open && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

    }),
}));
const themeMediaQuery = createTheme({
    breakpoints: {
        values: {
            mobileS: 450,
        }
    }
})

function Header() {
    const drawerStatus = useSelector(selectDrawer)
    const dispatch = useDispatch()
    const linkHeader = useSelector(selectLinkHeader)
    const theme = useTheme()


    return (
        <AppBar open={drawerStatus} sx={{ boxShadow: "0" }}>
            <Toolbar>
                {!drawerStatus && (
                    <IconContainer>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => dispatch(updateDrawer(true))}
                            edge="start"
                            sx={{
                                mr: 2, [theme.breakpoints.up('xs')]: {
                                    display: "none",
                                },
                                [themeMediaQuery.breakpoints.up('mobileS')]: {
                                    display: "block",


                                }, ...(drawerStatus && { display: 'none' })
                            }}


                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    </IconContainer>
                )}
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkMUI sx={{ textTransform: "capitalize" }} underline="none" color="inherit" >
                        {linkHeader}
                    </LinkMUI>
                    {/* {linkCategory?.length > 0 && (
                        <Typography color="text.primary">
                            {linkCategory}
                        </Typography>

                    )} */}


                </Breadcrumbs>

            </Toolbar>
        </AppBar>
    )
}




export default Header
