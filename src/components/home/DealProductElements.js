import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  background: linear-gradient(120deg, rgba(232,236,237,1) 36%, rgba(184,220,232,1) 100%);
  padding: 3rem;
  

 
`;
export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


  @media only screen and (min-width:768px){
    flex-direction:row;
   
  }
 
`;


export const ImageContainer = styled.div`

width:250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius:30px;

  }
`;
export const Description = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  

  @media only screen and (min-width:768px){
    margin-left:3rem;
  }

`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.3rem;
  text-transform: capitalize;
  font-weight: 600;

  font-family: Frank Ruhl Libre;
`;
export const Text = styled.p`
  font-size:1.1rem;
padding:0.5rem;
font-family:Lato;

color:#6b6b6b;
`;
export const TimeFrame = styled.div`
  padding: 1rem 0.5rem;
  width:260px;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(45px, 1fr));

  column-gap:10px;

  @media only screen and (min-width:600px){
    width:300px;
    column-gap:15px;
  }

  

`;
export const Time = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right:0px;
  padding:0.5rem ;
  background:white;
  border-radius:10px;
  box-shadow: -9px 10px 24px 2px #362C2E;


  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const SpanText = styled.p`
  font-size: 0.6rem;
  font-weight: 500;
  color: #111111;

  margin-right: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 0.7rem;
    margin-right: 0;
  }
`;
export const ButtonContainer = styled.div`
`

export const Button = styled.button`
  margin-top: 0.5rem;
  border: none;
  background: black;
  color: white;
  font-size: 0.8rem;
  padding:1rem 3rem;
  text-transform: uppercase;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    background: rgb(32,118,210);
  
  }

  @media only screen and (min-width:768px){
    margin-top:2rem;
  }

`;
