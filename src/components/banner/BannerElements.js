import styled from "styled-components";

export const BannerContainer = styled.div`
`;

export const BannerWrapper = styled.div`

  display: flex;
  flex-direction:column;
  background: linear-gradient(120deg, rgba(232,236,237,1) 36%, rgba(184,220,232,1) 100%);  

  @media screen and (min-width:981px) {
    display:flex;
    flex-direction:row;
    height: 62vh;
  }

 
`;

export const LeftCompartmentContainer = styled.div`
flex:0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding:2rem;
  padding-left:3rem;

  @media only screen and (min-width: 981px) {
    align-items:start;

  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 2rem 0;
  font-family: Frank Ruhl Libre;

  @media only screen and (min-width: 550px) {
    padding: 0;
  }
`;

export const Text = styled.p`
font-size:1.1rem;
padding:1rem 0;
font-family:Lato;
width:75%;
padding-right:2rem;
text-align:center;
color:#6b6b6b;


@media only screen and (min-width: 981px) {
  width:100%;

  text-align:start;

}

`

export const RightCompartmentContainer = styled.div`
  flex:0.5;
  border-radius: 40px;
  display: flex;
align-items:center;
justify-content:center;


 
`;


export const SectionContainer = styled.div`


  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
`;
export const SectionImageContainer = styled.div`
  max-height:270px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:nth-child(1) {
    background: #f9d89c;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &:nth-child(2) {
    background: #fec2c9;
  }
  &:nth-child(3) {
    background: #e1c8f7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

export const ButtonContainer = styled.div`
margin-top:1rem;`

export const Button = styled.button`
margin-top:1rem;
padding:0.9rem 2.2rem;
background:black;
color:white;
border:none;
border-radius:10px;
text-transform:uppercase;
font-weight:800;
box-shadow: -9px 14px 34px 2px #362C2E;
cursor:pointer;

&:hover{
  background: rgb(32,118,210);

}
`



export const TextRight = styled.h2`
  font-size: 3rem;
  position: absolute;
  z-index: 700;
  top: 0;
  padding-top: 220px;
  padding-left: 50px;

  text-align: center;
  height: 100%;

  background: -webkit-linear-gradient(
    90deg,
    rgba(238, 238, 238, 1) 76%,
    rgba(51, 51, 51, 1) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// rgb(248,205,190)  F8CDBE
// rgb(249,217,206)  F9D9CE

export const BannerFadeButtom = styled.div`
  height: 5.5rem;
  margin-top: -50px;
  position: relative;
  z-index: 800;
  border-radius: 0 40px 40px 40px;
 
`;

export const IconsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  background: transparent;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
`;

//slider

export const SliderContainer = styled.div`
  padding: 2rem;
  position: absolute;
  z-index: 800;
  top: 62vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 550px) {
    top: 68vh;
  }

  @media only screen and (min-width: 1050px) {
    display: none;
  }
`;

export const SliderWrapper = styled.div``;
export const SliderIcon = styled.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
  box-shadow: 10px 10px 10px black;
  margin-right: 0px;
  cursor: pointer;
`;
