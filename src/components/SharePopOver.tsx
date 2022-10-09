import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Group from "./Group";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

import classes from "./SharePop.module.css";

const SharePopOver: React.FC<{}> = () => {
  const [isFocus, setIsFocus] = useState(false);

  const focusChangeHandler = () => {
    setIsFocus(true);
  };
  const blurChangeHandler = () => {
    // setIsFocus(false);
  };
  return (
    <div className={classes.container}>
      <div className={classes.container__firstdiv}>
        <div className={classes.headerContainer}>
          <div className={classes.headerMainDiv}>
            <div className={classes.headerMainDiv__div}>
              <div className={classes.shareAndIconContainer}>
                <div>
                  <FontAwesomeIcon
                    className={classes.globeIcon}
                    icon={faEarthAsia}
                  />
                </div>
                <div className={classes.shareDiv}>
                  <h6 className={classes.h6}>Share To Web</h6>
                  <span className={classes.publishSpan}>
                    Publish and share link with everyone
                  </span>
                </div>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
          <div className={classes.bodyContainer}>
            <div className={classes.bodyMainContainer}>
              <div className={classes.inputContainer}>
                <div className={classes.inputComponent}>
                  <input
                    className={classes.inputComponent_input}
                    placeholder="People, emails, groups"
                    onFocus={focusChangeHandler}
                    onBlur={blurChangeHandler}
                  />
                  <button
                    className={classes.inputComponent_button}
                    type="button"
                  >
                    invite
                  </button>
                </div>
              </div>
              {isFocus ? <Group /> : <ModalBody />}
            </div>
          </div>
        </div>
        <ModalFooter />
      </div>
    </div>
  );
};

export default SharePopOver;
