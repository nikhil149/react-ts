import {
  faLink,
  faQuestionCircle,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import oslash from "../assets/oslash.svg";

import classes from "./SharePop.module.css";

const SharePopOver: React.FC<{}> = () => {
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
                  />
                  <button
                    className={classes.inputComponent_button}
                    type="button"
                  >
                    invite
                  </button>
                </div>
              </div>
              <div className={classes.bodyMainContainer_secondDiv}>
                <div className={classes.bodyMainContainer_secondDiv_div}>
                  <div
                    className={classes.bodyMainContainer_secondDiv_div__first}
                  >
                    <div className={classes.bodyMainContainer_secondDiv_imgDiv}>
                      <img
                        className={classes.bodyMainContainer_secondDiv_img}
                        src={oslash}
                        alt="oslash imange"
                      />
                    </div>
                    <div
                      className={classes.bodyMainContainer_secondDiv_spanDiv}
                    >
                      <span
                        className={classes.bodyMainContainer_secondDiv__span1}
                      >
                        Everyone at oslash
                      </span>
                      <span
                        className={classes.bodyMainContainer_secondDiv__span2}
                      >
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
            </div>
          </div>
        </div>
        <div className={classes.popFooter}>
          <div className={classes.popFooterDiv}>
            <div className={classes.learnDiv}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className={classes.learnSpan}>learn about sharing</span>
            </div>
            <button type="button" className={classes.copyLink}>
              <FontAwesomeIcon icon={faLink} />
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopOver;
