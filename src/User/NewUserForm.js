import React, { useState } from "react";

import css from "./NewUserForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const NewUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [Error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Information",
        msg: "It seems you are missing some information, please check your inputs",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        msg: "Age can't be lower than 1. Please check your input",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  return (
    <div>
      {Error && (
        <Modal hideError={errorHandler} title={Error.title} msg={Error.msg} />
      )}
      <Card className={css.NewUserForm}>
        <form onSubmit={submitHandler}>
          <label>UserName</label>
          <input value={userName} onChange={userNameHandler} type="text" />
          <label>Age (Years)</label>
          <input value={userAge} onChange={ageHandler} type="text" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUserForm;
