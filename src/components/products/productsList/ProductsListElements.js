import styled from "styled-components";

export const Container = styled.div`
  display:flex;
`;

export const Wrapper = styled.div`


`
export const WrapperLists = styled.div`

padding: 3rem 0;
display: grid;
grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
column-gap:20px;
row-gap: 50px;
overflow: hidden;

`;

export const IconContainer = styled.div``

export const SectionContainer = styled.div`
  padding:1rem;
display: flex;
flex-direction:column;
align-items:center;
transition:all 0.4s ease-out;

&:hover{
  transform: scale(1.05);
  box-shadow:5px 5px 5px #d1d1cf;
}`;

export const ImageContainer = styled.div`

flex:0.7;
width: 40vw;
min-width: 150px;
max-width: 200px;
overflow:hidden;

img {
  width: 100%;
  height: 100%;
  object-fit:contain;
}

@media only screen and(min-width: 768px){
  width: 20vw;
}
`;
export const SectionContent = styled.div`
flex:0.3;
padding: 1.2rem;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:25 %;

`;
export const Title = styled.h1`
font-size:1rem;
text-align:center;
`;

export const SubTitle = styled.h3`
font-size: 1rem;
margin: 1rem 0;
`;
export const Price = styled.p`
padding: 0.4rem 0;
font-weight: 700;
margin-bottom:1rem;
`;
export const Offer = styled.p``;
export const ButtonContainer = styled.div``

export const Button = styled.button`

border: 1px solid #e69a9a;
border-radius: 20px;
background: none;
font-weight: 800;
color: #e85f5f;
font-size: 0.9rem;
cursor: pointer;
padding: 0.7rem;
// width:200px;
border: 2px solid green;

  &:hover {
  background: red;
  color: white;
}
`;
