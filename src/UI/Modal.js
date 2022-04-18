import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import css from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={css.backdrop}
      onClick={props.hideError}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideError={props.hideError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          hideError={props.hideError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
