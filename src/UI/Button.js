import React from "react";

import css from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={css.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// in this custom reusable element we are passing 3 properties, one of each is an on click event called "onClick", so later when we are using the button we can pass a function too it with an onCLick event, we can latter call it like so : <Button onClick={props.hideError}>Close</Button> we however dont have to call it onClick, it can be anything, if we call it 'Fire' it will be called like so : <Button Fire={props.hideError}>Close</Button>
export default Button;
