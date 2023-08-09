import styled from "styled-components";


export const Container = styled.div`

    // height:60vh;
   
`

export const Title = styled.h2`
    margin:20px 0;
    padding:10px;
  
`

export const CardContainer = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
justify-items:center;
gap: 20px;
padding:20px;
margin-bottom:20px;

`
export const Card = styled.div`
   
    width:100%;
    height:100px;
    cursor:pointer;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(120deg, rgba(232,236,237,1) 36%, rgba(184,220,232,1) 100%);  
    padding:0 20px;
    font-weight:600;
    text-transform:uppercase;
    font-size:0.9rem;

    &:hover{
        background:transparent;
    }
`