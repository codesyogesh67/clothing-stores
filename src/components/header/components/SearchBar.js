import React from "react";
import {
  Input,
  SearchBarContainer,
  SearchFormContainer,

} from "../HeaderElements";

import { useDispatch } from "react-redux";
import { updateOpenModal } from "../../../features/extras/extrasSlice";
import SearchModal from "./SearchModal";
import { updateMobileView } from "../../../features/extras/extrasSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(updateMobileView(false));
    dispatch(updateOpenModal(true));
  };

  return (
    <SearchBarContainer>
      <SearchFormContainer>
        <Input placeholder="Search..." onChange={showModal} onClick={showModal} />
      </SearchFormContainer>
      <SearchModal />
    </SearchBarContainer>
  );
}

export default SearchBar;
