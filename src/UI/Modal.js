import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import css from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={css.backdrop}></div>
      <Card className={css.modal}>
        <header className={css.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={css.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={css.actions}>
          <Button onClick={props.hideError}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
