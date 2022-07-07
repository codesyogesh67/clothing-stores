import styled from "styled-components";

export const Container = styled.div`
padding: 0 15px;
  display: flex;
  flex-direction:column;
  padding-bottom:3rem;

  @media only screen and (min-width:768px){
    flex-direction:row;
    justify-content:center;
  }

`;

export const Wrapper = styled.div`
 
`;
export const PaymentHeader = styled.div`
  display: flex;
  align-items: center;

  padding: 2rem 0;
  padding-bottom:1rem;
  padding-left:0.5rem;

`;

export const Title = styled.h1`
  font-size: 1.5rem;

`;

export const PaymentBox = styled.div`
  margin-right: 5px;
  
`;

export const PaymentBoxHeader = styled.div`
  display: flex;
  flex-direction:column;
  padding: 1rem ;


  @media only screen and (min-width:550px){
    flex-direction:row;
  }
`;
export const Text = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;

  padding:1rem 0;

  p {
    padding: 0.2rem 0;
    padding-left: 0.2rem;
  }

  p:nth-child(1) {
    font-weight: 700;
    font-size: 1.2rem;
  }

  p:nth-child(2) {
    font-size: 0.8rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0.4;
  display: flex;

`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding:0.5rem 0;

  img {
    width: 30px;
    object-fit: contain;
    margin-right: 10px;
  }

  @media screen and (min-width:550px){
    justify-content:flex-end;
  }
`;

export const PaymentDetails = styled.div``;

export const CardNumber = styled.input``;
export const CardName = styled.input``;
export const CardDate = styled.input``;

export const CardCode = styled.div``;

export const PaymentForm = styled.div``;
