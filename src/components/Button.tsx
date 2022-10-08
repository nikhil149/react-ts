import React, { useState } from "react";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Button.module.css";
import SharePopOver from "./SharePopOver";

const Button: React.FC<{
  text: string;
  bgColor: string;
  textColor: string;
}> = ({ text, bgColor, textColor }) => {
  const [isPopEnabled, SetIsPopEnabled] = useState(false);
  const popOverHandler = () => {
    SetIsPopEnabled((prevState) => !prevState);
  };
  return (
    <div>
      <button
        type="button"
        style={{
          display: "flex",
          backgroundColor: bgColor,
          color: textColor,
          padding: "8px, 16px",
        }}
        className={classes.button}
        onClick={popOverHandler}
      >
        {text}
        <FontAwesomeIcon icon={faShareAlt} />
      </button>
      {isPopEnabled && <SharePopOver />}
    </div>
  );
};

export default Button;
