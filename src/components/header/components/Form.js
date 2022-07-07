import React from "react";
import { FormContainer, Input, } from "../HeaderElements";
import {

  updateOpenModal,
} from "../../../features/extras/extrasSlice";
import { useDispatch } from "react-redux";

function Form(props) {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(updateOpenModal(true));
  };
  return (
    <FormContainer>
      <Input placeholder="Search..." onClick={showModal} />
    </FormContainer>
  );
}

export default Form;
