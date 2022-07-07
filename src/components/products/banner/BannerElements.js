import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    120deg,
    rgba(208, 204, 203, 1) 36%,
    rgba(255, 253, 253, 1) 100%
  );
  z-index: 100;



`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction:column-reverse;
  justify-content: space-between;
  align-items: center;
  padding:2rem;



  @media only screen and (min-width:600px){
    flex-direction:row;
  }
`;

export const ImageContainer = styled.div`
  // width: 200px;
  // min-height:200px;
  min-width:200px;
  max-width:500px;


  margin-left: 60px;
  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.7rem;
  color: #bbbdbf;
`;

export const FadeBottom = styled.div`
  height: 3rem;
  margin-top: -50px;
  position: relative;

  z-index: 500;

  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(255, 253, 253, 1),
    rgba(255, 253, 253, 1),
    #fff
  );
`;
