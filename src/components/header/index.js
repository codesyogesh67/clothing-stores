import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import {
  HeaderContainer,
  Wrapper,
  HamburgerIcon,
  SearchMobileIcon,
} from "./HeaderElements";
import Logo from "./components/Logo";
import Drawer from "./components/Drawer";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ModalBox from "./components/ModalBox";
import Navbar from "../navbar";
import { updateOpenModal, updateMobileView, updateOpenDrawer, selectOpenDrawer } from "../../features/extras/extrasSlice";
import HeaderLinks from "./components/HeaderLinks";

function Header() {
  const [openModalBox, setOpenModalBox] = useState(false);
  const dispatch = useDispatch();
  const openDrawer = useSelector(selectOpenDrawer)

  const openSearchBar = () => {
    dispatch(updateMobileView(true));
    dispatch(updateOpenModal(true));
  };

  const clickDrawer = () => {
    dispatch(updateOpenDrawer(true))
  }



  return (
    <HeaderContainer>
      <Wrapper>
        <SearchMobileIcon onClick={openSearchBar} />
        <SearchBar />
        <Logo />
        <HeaderLinks />
        <IconButton onClick={clickDrawer}>
          <HamburgerIcon />
        </IconButton>

        <ModalBox open={openModalBox} setOpen={setOpenModalBox} />
        {openDrawer && <Drawer />}

      </Wrapper>
      <Navbar />



    </HeaderContainer>
  );
}

export default Header;
