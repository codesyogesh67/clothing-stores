import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom:2rem;
  background: rgba(214, 212, 212, 0.5);

  min-width:300px;

  @media only screen and (min-width:768px){
    margin-top:7rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h3`
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const TotalCount = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1.2rem 1rem;
  padding-bottom: 0.8rem;
`;
export const SubTotal = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1.2rem 1rem;
  padding-bottom: 0.8rem;
`;
export const ShippingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
`;

export const ShippingLabel = styled.p``;

export const ShippingValue = styled.p`
  color: red;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
`;
export const OrderTotal = styled.div`
  padding: 1.2rem 1rem;
  padding-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
`;
export const TotalLabel = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const TotalValue = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Divider = styled.div``;

export const ButtonContainer = styled.div`
  padding: 1rem;
`;

export const Button = styled.button`
  font-size: 1rem;

  padding: 0.7rem 5rem;
  border: none;
  background: rgb(230, 159, 67);
  color: black;
  font-weight: 700;
  letter-spacing: -0.05rem;
  border-radius: 10px;
`;
