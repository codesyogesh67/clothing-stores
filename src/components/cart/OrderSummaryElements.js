import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin-top: 7rem;
  background: rgba(214, 212, 212, 0.5);

  margin-bottom:20px;
  

  
`;
export const ButtonContainer = styled.div`
  padding: 1rem;
  overflow:hidden;
  text-align:center;
  padding: 0.7rem 5rem;
  background: rgb(37, 52, 112);
`;

export const Button = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  background:none;
  color: white;
  font-weight: 700;
  letter-spacing: -0.05rem;
  text-align:center;
  cursor:pointer;
`;
export const Divider = styled.div`
  height: 2px;
  background: rgba(214, 212, 212, 0.8);
  margin: 1rem 0;
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

export const InfoLink = styled.p`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.3rem 0;
  color: rgb(94, 125, 166);
  cursor: pointer;
`;
