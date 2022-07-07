import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: none;

  @media only screen and (min-width: 550px) {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
   
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5rem;
 
`;

export const LinkText = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin-right: 70px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    font-weight: 800;
    border-bottom: 3px solid black;
  }
`;

//category lists

export const CategoryListContainer = styled.div`
  width: 99vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  column-gap: 20px;


`;
export const CategorySection = styled.div`
  width: 100%;

  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;



export const SectionLink = styled.h5`
  padding: 0.5rem 0.3rem;
  font-weight: 500;
  font-size: 0.9rem;
  &:hover {
    color: green;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;
