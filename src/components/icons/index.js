import React from "react";
import {
  IconsContainer,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "./IconsElements";
import { IconButton } from "@mui/material";

function Icons({ color }) {
  return (
    <IconsContainer>
      <IconButton>
        <IconFacebook color={color} />
      </IconButton>
      <IconButton>
        <IconInstagram color={color} />
      </IconButton>
      <IconButton>
        <IconTwitter color={color} />
      </IconButton>
    </IconsContainer>
  );
}

export default Icons;
