import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 50px 30px;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  a {
    color: white;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
`;

export const FooterEmailSection = styled.div`
  width: 250px;
  p {
    padding: 0.2rem 0.3rem;
    padding-bottom: 1.5rem;
    font-size: 0.6rem;
    line-height: 1.2rem;
  }
`;
export const Divider = styled.div`
  height: 0.13rem;
  background-color: white;
  margin: 10px 0;
`;
export const FooterForm = styled.form`
  margin: 1rem 0;
  border: 2px solid white;
  display: flex;
  margin-bottom: 2rem;
  input {
    flex: 1;
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 0.8rem;
    border: none;
    background: black;
    color: white;
    outline: none;
  }
  input::placeholder {
    color: white;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  input::focus {
    outline: none;
  }

  button {
    border: none;
    padding: 0 0.8rem;
    text-transform: uppercase;
    font-size: 0.6rem;
  }
`;
export const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (min-width: 550px) {
    flex-direction: row;
    width: 100%;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  a {
    padding: 0.8rem 0;
    font-size: 0.7rem;
    cursor: pointer;
  }

  @media only screen and (min-width: 550px) {
    margin-bottom: 0;
  }
`;
