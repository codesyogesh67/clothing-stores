import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
 
`;

export const Wrapper = styled.div`
  display: flex;

  margin-bottom: 2rem;

  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  flex: 0.47;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 0.8rem;
  margin-top: 1.2rem;

  @media only screen and (min-width:550px){
    font-size:1.2rem;
  }
`;
