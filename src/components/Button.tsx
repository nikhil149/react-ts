import React from "react";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Button.module.css";

const Button: React.FC<{
  text: string;
  bgColor: string;
  textColor: string;
}> = ({ text, bgColor, textColor }) => {
  return (
    <button
      style={{
        display: "flex",
        backgroundColor: bgColor,
        color: textColor,
        padding: "8px, 16px",
      }}
      className={classes.button}
    >
      {text}
      <FontAwesomeIcon icon={faShareAlt} />
    </button>
  );
};

export default Button;
