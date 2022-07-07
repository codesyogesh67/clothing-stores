import React from "react";
import {
  CategoryListContainer,

  CategorySection,

  SectionLink,

} from "./NavbarElements";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLink } from "../../features/links/linksSlice";


function CategoryLists(props) {
  const dispatch = useDispatch();
  console.log("props", props.data)

  return (
    <CategoryListContainer>

      <CategorySection>



        {props.data[0]?.section[0].categories.map((category) => (


          <Link
            to={`/category/${props.data[0]?.header}/${category}`}
            onClick={() => dispatch(updateLink({ header: category }))}
          >
            <SectionLink>{category}</SectionLink>
          </Link>


        ))}



      </CategorySection>

    </CategoryListContainer>
  );
}

export default CategoryLists;
