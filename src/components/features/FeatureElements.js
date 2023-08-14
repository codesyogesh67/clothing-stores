import styled from "styled-components";



export const Container = styled.div`
padding-left:3rem;
margin:2rem 0;
`

export const Title = styled.h2`
    margin:20px 0;
    padding:10px;
  
  
`

export const CardContainer = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
justify-items:center;
column-gap:25px;
row-gap:50px;
padding:20px;
margin-bottom:20px;

`
export const Card = styled.div`
   
  
    width:200px;
    height:200px;
    cursor:pointer;
    border-radius:10px 10px 0 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: linear-gradient(120deg, rgba(232,236,237,1) 36%, rgba(184,220,232,1) 100%);  
  
    font-weight:600;
    text-transform:uppercase;
    font-size:0.9rem;
    transition:all 0.2s ease-out;
    border:1px solid rgba(232,236,237,1);

    &:hover{
        // background:transparent;
        scale:1.06;
    }
    img{
        width:100%;
        height: 100%;
        // aspect-ratio:4/3;
        // object-fit:contain;
        overflow:hidden;
        border-radius:10px 10px 0 0;
    }
    p{
        padding:10px;
        font-size:0.8rem;
        background: linear-gradient(120deg, rgba(232,236,237,1) 36%, rgba(184,220,232,1) 100%);  

    }
`