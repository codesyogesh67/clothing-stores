import React, { useState } from "react";
import {
  ModalInput,
  Icon,

  ModalContainer,
  SearchOptions,
} from "../HeaderElements";
import { FormContainer, CloseIcon } from "../HeaderElements";


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useSelector, useDispatch } from "react-redux";

import {

  updateOpenModal,
  selectOpenModal,
  selectMobileView
} from "../../../features/extras/extrasSlice";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { selectProducts, updateProductInfo } from "../../../features/products/productsSlice";

function SearchModal() {
  const [filterData, setFilterData] = useState([]);
  const openModal = useSelector(selectOpenModal);
  const [wordEntered, setWordEntered] = useState("");
  const mobileView = useSelector(selectMobileView);
  const productsData = useSelector(selectProducts);


  const dispatch = useDispatch();


  const handleClose = (data) => {
    dispatch(updateProductInfo(data))
    dispatch(updateOpenModal(false))
    setFilterData([]);
    setWordEntered("");

  };

  const handleChange = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = productsData?.filter((value) => {
      return value.data.name.toLowerCase().includes(searchWord.toLowerCase()) || value.data.category.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const closeFilterData = () => {
    setFilterData([]);
    setWordEntered("");
    dispatch(updateOpenModal(false));
  };
  console.log("fitler data", filterData)

  return (

    <Modal
      open={openModal}
      autoFocus={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <ModalContainer mobileView={mobileView}>

        <FormContainer>
          <ModalInput
            placeholder="Search..."
            value={wordEntered}
            onChange={handleChange}
            autoFocus={true}
          />
          {wordEntered?.length === 0 ? (
            <Icon />
          ) : (
              <CloseIcon onClick={closeFilterData} />
            )}

        </FormContainer>


        <SearchOptions>
          {filterData?.slice(0, 10).map((obj) => {
            const { id, data: { name } } = obj
            return (
              <Link key={id} to={`/product/${name}`} onClick={() => handleClose(obj)}>
                <List>
                  <ListItem disablePadding>

                    <ListItemButton>

                      <ListItemText primary={name} />

                    </ListItemButton>

                  </ListItem>
                </List>
              </Link>
            )
          })}

        </SearchOptions>
      </ModalContainer>
    </Modal>

  );
}

export default SearchModal;
