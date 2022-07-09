import React, { useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  List,
  Divider,

  ListItemIcon,
  ListItemText,
  IconButton,

  Collapse,
  ListItemButton,
  MenuList, MenuItem,
} from "@mui/material";
import {
  DrawerBox, CloseIcon, DrawerHeader, PersonIcon,
  CartIcon,
  HomeLinkIcon,
} from "../HeaderElements";
import { selectUser } from "../../../features/auth/authSlice";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoryLinks } from "../../../features/products/productsSlice";
import { selectOpenDrawer, updateOpenDrawer } from "../../../features/extras/extrasSlice";
import { updateLink } from "../../../features/links/linksSlice";
import { auth } from "../../../firebase";
import { logout } from "../../../features/auth/authSlice";



const DrawerLinks = (props) => {
  const { links } = props;
  const { header } = props;
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    setShow(!show)
  }

  const moveToProductPage = (category, header) => {
    dispatch(updateOpenDrawer(false))
    dispatch(updateLink(category, header))

  }

  return (

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItemButton onClick={handleClick}>

        <ListItemText sx={{
          textTransform: "capitalize", '& .css-10hburv-MuiTypography-root': {
            fontWeight: 510,
            fontSize: "1rem"
          }
        }} primary={header} />
        {show ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {links?.map(each => (
            <Link to={`/category/${header}`} onClick={() => moveToProductPage({ category: each.title, header })}>

              <ListItemButton >
                <ListItemText primary={each.title} sx={{
                  color: "#6f7070", '& .css-10hburv-MuiTypography-root': {
                    fontSize: "0.9rem"
                  }
                }} />
              </ListItemButton>
            </Link>
          ))}


        </List>
      </Collapse>
    </List>
  )

}


export default function Drawer() {

  const open = useSelector(selectOpenDrawer)
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  const navigate = useNavigate()


  const categoryLinks = useSelector(selectCategoryLinks);

  const logoff = () => {
    dispatch(logout())
    navigate("/")
  }

  return (

    <DrawerBox open={open}>
      <DrawerHeader>
        <IconButton onClick={() => dispatch(updateOpenDrawer(false))}>


          <CloseIcon />
        </IconButton>
      </DrawerHeader>


      {categoryLinks?.map((item, index) => {
        const { header, section } = item
        return (
          <DrawerLinks key={header} header={header} links={section} />

        )
      })}

      <Divider sx={{ width: "95%" }} />


      <MenuList>


        {user === null ? (
          <Link to="/signin" onClick={() => dispatch(updateOpenDrawer(false))}>
            <MenuItem>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>
          </Link>
        ) : (<Link to="/" onClick={() => auth.signOut()}>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={logoff}>Logout</ListItemText>
          </MenuItem>
        </Link>
          )}


        <Link to="/cart" onClick={() => dispatch(updateOpenDrawer(false))}>
          <MenuItem>
            <ListItemIcon>
              <CartIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Checkout</ListItemText>

          </MenuItem>
        </Link>
        <Link to="/" onClick={() => dispatch(updateOpenDrawer(false))}>
          <MenuItem>
            <ListItemIcon>
              <HomeLinkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>

          </MenuItem>
        </Link>


      </MenuList>





    </DrawerBox>

  );
}

