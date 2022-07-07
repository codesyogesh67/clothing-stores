import styled, { css } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const IconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  background: transparent;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
`;
export const Icon = css`
  color: ${(props) => props.color};
`;
export const IconFacebook = styled(FacebookIcon)`
  ${Icon}
`;
export const IconInstagram = styled(InstagramIcon)`
  ${Icon}
`;
export const IconTwitter = styled(TwitterIcon)`
  ${Icon}
`;
