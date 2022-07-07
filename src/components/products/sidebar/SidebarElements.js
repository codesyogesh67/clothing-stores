import styled from "styled-components";

export const Container = styled.div`
display:none;

@media only screen and (min-width:450px){
  display:flex;
}
  
`;


export const Wrapper = styled.div`
  flex: 1;

  & .css-12i7wg6-MuiPaper-root-MuiDrawer-paper{
    position:static !important;


  }
`;

export const IconContainer = styled.div`
  display: ${props => props.openDrawer ? "none" : "flex"};

  justify-content:end;

`;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
export const SubHeadingContainer = styled.div`
  padding: 2rem;
`;
export const SubHeading = styled.p`
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 10px;

`;

export const LinksLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  p {
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 0.8rem;
  }
  a:hover {
    color: green;
  }
`;
