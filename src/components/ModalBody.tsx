import React from "react";

import classes from "./ModalBody.module.css";
import oslash from "../assets/oslash.svg";

const ModalBody: React.FC = () => {
  return (
    <div className={classes.bodyMainContainer_secondDiv}>
      <div className={classes.bodyMainContainer_secondDiv_div}>
        <div className={classes.bodyMainContainer_secondDiv_div__first}>
          <div className={classes.bodyMainContainer_secondDiv_imgDiv}>
            <img
              className={classes.bodyMainContainer_secondDiv_img}
              src={oslash}
              alt="oslash imange"
            />
          </div>
          <div className={classes.bodyMainContainer_secondDiv_spanDiv}>
            <span className={classes.bodyMainContainer_secondDiv__span1}>
              Everyone at oslash
            </span>
            <span className={classes.bodyMainContainer_secondDiv__span2}>
              25 workspace members
            </span>
          </div>
        </div>
        <button
          type="button"
          className={classes.bodyMainContainer_secondDiv_div__button}
        >
          No Access
        </button>
      </div>
    </div>
  );
};

export default ModalBody;
