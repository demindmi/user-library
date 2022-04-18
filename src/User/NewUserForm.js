import React, { useState, useRef } from "react";

import css from "./NewUserForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";

// we will use REFS here instead of State
const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [Error, setError] = useState();
  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Information",
        msg: "It seems you are missing some information, please check your inputs",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        msg: "Age can't be lower than 1. Please check your input",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Wrapper>
      {Error && (
        <Modal
          hideError={errorHandler}
          title={Error.title}
          msg={Error.msg}
        />
      )}
      <Card className={css.NewUserForm}>
        <form onSubmit={submitHandler}>
          <label>UserName</label>
          <input
            id="userName"
            type="text"
            ref={nameInputRef}
          />
          <label>Age (Years)</label>
          <input id="age" type="text" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default NewUserForm;
