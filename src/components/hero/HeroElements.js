import styled from "styled-components";


export const Container = styled.div`

    display:flex;
    margin:10px 0;


`

export const CategoryList = styled.p`
background:#e4f1f5;  
// height:100%;
flex:0.4;
padding:2rem;



& li{
    list-style:none;
    padding:0.5rem;
    cursor:pointer;
    text-transform:uppercase;
    border-bottom:1px solid #d2d4d2;
    margin-bottom:1rem;
    font-weight:bold;
    font-size:0.8rem;

}

`

export const Main = styled.div`
flex:1;
display:flex;
justify-content:center;
padding:0.4rem;


`

export const SearchBar = styled.div`
width:98%;
border:1px solid #e3e5e6;
margin:0 0.5rem;

& form{
    width:100%;

    display:flex;
}
& input{
    border:none;
    padding:0.8rem;
    flex:1;
    padding-left:1.6rem;
}

& input:focus{
    outline:none;
}
& button{
    border:none;
    padding:0.5rem;
}
`

export const ProductsList = styled.div`

display:flex;
justify-content:center;
height:300px;
margin:0.8rem 0;


& img {
    object-fit:contain;
    
}

& img .fade-in {
    opacity: 0;
    transition: opacity 0.5s;
    border:2px solid red;
  }
  
 & img .fade-in:not(.fade-in) {
    opacity: 1;
  }
`