import React from "react";
import { Container } from "./CategoryElements";
import { useLocation, useResolvedPath } from "react-router-dom";
import Sidebar from "../../sidebar";
import { useSelector } from "react-redux";

function Category() {
  const location = useLocation();

  const title = location.pathname.replace("%20", " ").split("/")[2];
  return (
    <Container>
      <Sidebar />
      {title}
    </Container>
  );
}

export default Category;
