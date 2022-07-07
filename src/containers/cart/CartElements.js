import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1050px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
`;
export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding:2rem 0rem;
 

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 2rem 4rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const TotalCount = styled.p`
  flex: 1;

  font-size: 0.9rem;
  font-weight: 600;
  text-transform:capitalize;
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

export const BackButton = styled.button`
  border: none;
  position: absolute;
  right: 25px;
  top: 18vh;
  background: none;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: -0.012rem;
  width:100px;
  color: rgb(92, 128, 191);

  @media only screen and (min-width:550px){
    top:22vh;
  }

  @media only screen and (min-width: 650px) {
    width:150px;
    font-size:0.9rem;
   
  }
`;
export const Divider = styled.div`
  height: 10px;
  background: rgba(214, 212, 212, 0.5);
  border: none;

  @media only screen and (min-width:768px){
    margin:0 40px;
  }
`;

export const CartList = styled.div`
  padding: 2rem 0;

  @media only screen and (min-width: 550px) {
    padding: 2rem;
  }

  @media only screen and (min-width:768px){
    padding:2rem 4rem;
  }
`;

export const CartLabels = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const CartLabel = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.012rem;
  font-size: 1.1rem;

  &:nth-child(1) {
    flex: 1;
  }
  &:nth-child(3) {
    flex: 0.2;
    text-align: end;
  }

  @media only screen and (min-width: 550px) {
    &:nth-child(1) {
      flex: 0.8;
    }
    &:nth-child(3) {
      flex: 0;
    }
  }
`;
export const CartProduct = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 550px) {
    flex-direction: row;
    padding-right:0;
   
   
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  border: 1px solid rgba(202, 204, 203, 0.4);
  padding: 0.8rem;
  

  img {

    width: 100%;
    height: 100%;
    object-fit: contain;
  }


`;

export const ProductDetail = styled.div`
  flex: 1;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media only screen and (min-width:768px){
    flex-direction:row;
  }
`;

export const ProductDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  padding: 1rem 0;
  
`;
export const ProductTitle = styled.h3`
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: -0.05rem;
  font-size: 1.2rem;
  width: 220px;

`;
export const ProductCategory = styled.p`
`;

export const ProductPrice = styled.div`
position:relative;
flex: 0.25;

 p{
  text-align: end;
  position:absolute;
 top:-100px;
 left:-100px;
 font-size:1.1rem;

 @media only screen and (min-width:768px){
   position:static;
 }
 }

`;
export const ProductInfo = styled.div`
  flex: 1;
`;
export const Links = styled.div`
  display: flex;
  margin: 1rem 0;
  padding-top:6rem;

  @media only screen and (min-width:768px){
    padding-top:0;
  }
`;

export const CartLink = styled.p`
  color: rgb(92, 128, 191);
  cursor: pointer;
`;

export const RemoveButtonDiv = styled.p`
  color: rgb(92, 128, 191);
  cursor: pointer;
`;

export const LinkDivider = styled.div`
  width: 2px;
  height: 15px;
  background-color: rgb(212, 212, 212);
  margin: 0 0.4rem;
  margin-top: 0.2rem;
`;

export const CartProductDivider = styled.div`
  height: 2px;
  background: rgba(214, 212, 212, 0.5);
  border: none;
  margin: 0 40px;
`;


export const EmptyCartDiv = styled.div`

display:flex;
font-size:1.3rem;
justify-content:center;
padding:20% 0;
color:rgb(143, 139, 139);`
  ;