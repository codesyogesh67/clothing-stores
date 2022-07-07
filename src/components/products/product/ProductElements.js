import styled from "styled-components";

export const Container = styled.div`
  padding:6rem 2rem;
  padding-bottom:5rem;

  @media only screen and(min-width:768px){
    padding: 6rem 4rem;

  }

 
`;
export const LinkText = styled.p`
  color: #595858;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;


  @media only screen and (min-width:768px){
    flex-direction:row;
  
  }
`;

export const ImageContainer = styled.div`
  width:300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (min-width:768px){
    flex:1.2;
  }
`;

export const Info = styled.div`
  flex: 1;
  width:100%;

  display: flex;
  flex-direction: column;
  align-items:center;
  padding:2rem 0;
  button{
    margin-top: 2rem !important;
    max-width:250px;
  }

  @media only screen and (min-width:768px){
    padding:1rem;
 
  }
 
`;

export const Title = styled.h3`
  font-size: 1.2rem;
`;

export const Description = styled.p`
  padding: 0.5rem 0;
  font-size: 1rem;
  color: rgb(110, 110, 110);
  flex: 0.6;

  @media only screen and (min-width:768px){
    font-size:1rem;
  }
`;

export const ColorList = styled.div`
padding-top:1rem;
  margin-bottom:2.8rem;
  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
  span {
    padding: 0 0.5rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  div {
    display: flex;
    margin: 1.2rem 0;
  }
`;

export const SelectColor = styled.p`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  margin: 0 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export const Price = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  padding:1rem 0;

  @media only screen and (min-width:768px){
    font-size: 1.6rem;
  }
`;

export const SizeList = styled.div`

  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
  span {
    padding: 0 0.5rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  div {
    display: flex;
    margin: 1.2rem 0;
    margin-bottom:0rem;
  }
`;

export const SelectSize = styled.p`
  border: 1px solid rgba(1, 1, 1, 0.5);

  margin: 0 0.5rem;
  text-align: center;
  font-weight: 400;

  padding: 0.2rem 0.5rem;
  font-size:1.5rem;

  // text-transform: uppercase;
  cursor: pointer;
`;
