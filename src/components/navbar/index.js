import React from "react";
import { NavbarContainer, Wrapper, LinkText } from "./NavbarElements";
import { Link } from "react-router-dom";
import CategoryLists from "./CategoryLists";
import styled from "styled-components";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import {
  customCategoryLinks,
  purposeCategoryLinks,
} from "../../app/data/CategoryLinks";
import { useDispatch, useSelector } from "react-redux";
import { updateLink } from "../../features/links/linksSlice";
import { selectCategoryLinks } from "../../features/products/productsSlice";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    border: "1px solid #dadde9",
  },
}));

function Navbar() {
  const dispatch = useDispatch();
  const categoryLinklist = useSelector(selectCategoryLinks)

  return (
    <NavbarContainer>
      <Wrapper>
        {categoryLinklist?.map((each, index) => {
          return (
            <HtmlTooltip
              key={index}
              title={
                each.header === "purpose designed tees" ? (

                  <CategoryLists data={purposeCategoryLinks} />

                ) : (

                    <CategoryLists data={customCategoryLinks} />

                  )
              }
            >
              <Link
                to={`/category/${each.header}`}
                onClick={() => dispatch(updateLink({ header: each.header }))}
              >
                <LinkText>{each.header}
                </LinkText>
              </Link>
            </HtmlTooltip>
          );
        })}
      </Wrapper>
    </NavbarContainer>
  );
}

export default Navbar;
