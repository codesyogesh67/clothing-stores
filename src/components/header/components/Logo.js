import React from "react";
import { LogoContainer, Text } from "../HeaderElements";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <LogoContainer>
      <div>
        <Link to="/">
          <Text>T-StyleS</Text>
        </Link>
      </div>
    </LogoContainer>
  );
}

export default Logo;
