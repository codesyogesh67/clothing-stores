import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";
import { updateOpenModal } from "../../../features/extras/extrasSlice";
import SearchModal from "./SearchModal";
import { updateMobileView } from "../../../features/extras/extrasSlice";
import { SearchBarContainer, SearchFormContainer, Input } from "../HeaderElements"

function SearchBar() {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(updateMobileView(false));
    dispatch(updateOpenModal(true));
  };

  return (
    <SearchBarContainer>
      <SearchFormContainer>
        <Input placeholder="What are you looking for?" />
        <button className="searchBar__icon">
          <SearchIcon />
        </button>
      </SearchFormContainer>
      <SearchModal />
    </SearchBarContainer>
  );
}

export default SearchBar;
