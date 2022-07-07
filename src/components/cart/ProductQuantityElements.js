import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  position:relative;


`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position:absolute;
  top:-140px;
  left:-120px;

  @media only screen and (min-width:768px){
    position:static;
  }
`;
export const DifferenceTab = styled.div`
  font-size: 1.4rem;
  margin: 0 0.5rem;
  font-weight: 500;
  cursor: pointer;
`;

export const Value = styled.p`
  border: 2px solid rgba(207, 207, 207, 0.6);
  border-radius: 5px;
  padding: 0.3rem 0.7rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const AdditionTab = styled.div`
  font-size: 1.4rem;
  margin: 0 0.5rem;
  font-weight: 500;
  cursor: pointer;
`;
