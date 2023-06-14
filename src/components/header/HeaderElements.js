import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer as MUIDrawer } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;
  box-shadow: 10px 10px 10px 1px rgba(237, 235, 235, 0.2);


`;

export const Wrapper = styled.div`
 padding:1.2rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f2f0f0;


  @media only screen and (min-width:550px){
    padding: 1.2rem 1.5rem;
  }

  @media only screen and (min-width:763px){
    padding:1.2rem 3rem;
  }
`;

// searchbar

export const SearchBarContainer = styled.div`
  display: flex;
  
`;

export const SearchMobileIcon = styled(SearchIcon)`
  display: block;
  font-size: 1.5rem !important;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`;

export const SearchFormContainer = styled.form`
`
export const Input = styled.input`
  display: none;

  @media only screen and (min-width: 768px) {
    border: none;
    border-radius:15px;
    background:#dee0df;
    padding: 0.6rem 1rem;
    display: block;
    display:none;

    &:focus {
      outline: none;
    }
  }
`;

export const Icon = styled(SearchIcon)`
  margin-right: 10px !important;
  color: #6d6d6e !important;
  font-size: 1.2rem !important;
  cursor: pointer;
`;

export const SearchOptions = styled.div`
  @media only screen and (min-width: 768px) {
    border-radius:15px;
    font-size: 1.2rem;
    padding: 10px 0;
    display: block;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;



export const ModalContainer = styled.div`
  position: absolute;

  top: 78px;
  width: 100%;
  border: none;
padding:0.2rem;
background:white;


  @media only screen and (min-width: 768px) {
    width: 300px;
    top:0px;


    padding:1.2rem 1rem;
    padding-bottom:0.1rem;
  }
`;


export const FormContainer = styled.form`


  display: flex;
  align-items: center;
  padding:0.6rem 1rem;
  background:#d9dbda;
  border-radius: 15px;

  @media only screen and (min-width: 768px) {
    border: 1px solid #dbdbdb;

    &:focus {
      border: 1px solid black;
    }
  }
`;


export const ModalInput = styled.input`
width:100%;
border:none;
background:none;

&:focus{
  outline:none;
}`

//logo
export const LogoContainer = styled.div`
  flex: 1;
  text-align: center;

`;
export const Text = styled.span`
  text-transform: uppercase;
  font-weight: 800;
  font-size:2rem;
  letter-spacing: -0.13rem;

`;

//links
export const HeaderLinksContainer = styled.div`
  display: none;
 

  @media only screen and (min-width: 550px) {
    flex: 0.2;
    display: flex;
    justify-content: space-around;
  }
`;
export const PersonIcon = styled(PersonOutlineIcon)``;
export const CartIcon = styled(ShoppingCartIcon)``;
export const HomeLinkIcon = styled(HomeIcon)``;

export const HamburgerIcon = styled(MenuIcon)`
  @media only screen and (min-width: 550px) {
    display: none !important;
  }
`;

export const BoxContainer = styled.div`
display:none;

@media only screen and (min-width:550px){
  margin:20%;
  display:flex;
  justify-content:center;
  align-items:center;
}
  
`

//drawer



export const DrawerBox = styled(MUIDrawer)`

  & .MuiPaper-root {
  width: 50%;
    height: 100vh;
    display: flex;
    padding-top: 20px;
    align-items: center;
    transition:width .5s linear;
  }
  & .MuiList-root {
    width: 100%;
  }
`;

export const DrawerHeader = styled.div`

  align-self: flex-end;
  padding-bottom: 30px;

`;

export const CloseIcon = styled(CancelIcon)``;

