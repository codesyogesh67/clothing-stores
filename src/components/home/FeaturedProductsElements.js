import styled from "styled-components";

export const Container = styled.div`
  // width: 100%;
  // display: flex;

`;
export const Wrapper = styled.div`
  flex: 1;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  background: linear-gradient(120deg, rgba(255,255,255,1) 36%, rgba(237,232,226,1) 100%);
  
  @media only screen and (min-width:768px){
   grid-template-columns:repeat(3,1fr);
  }
  
`;

export const Description = styled.div`
padding:2rem 0;

grid-row: 2/3;
grid-column: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


@media only screen and (min-width:768px){
  grid-row:1/2;
  grid-column:2/3;
}

  
`;
export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 2.3rem;
  text-transform: capitalize;
  font-weight: 600;
  font-family: Frank Ruhl Libre;
`;
export const Text = styled.p`
  font-size:1.1rem;
  padding:0.3rem 0;
font-family:Lato;
padding-right:2rem;
text-align:center;
color:#6b6b6b;
`;

export const ImageContainer = styled.div`
  height:50vh;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit:contain;

  }

  @media only screen and (min-width:768px){
    height:60vh;
  }

`;



export const Button = styled.button`
border:none;
background: linear-gradient(120deg, rgba(232,236,237,1) 36%, rgba(184,220,232,1) 100%);  
padding:2rem;
margin-top:1rem;
padding:0.9rem 2.2rem;
margin-top:2rem;

color:black;
border:none;
border-radius:10px;
text-transform:uppercase;
font-weight:800;
cursor:pointer;

`