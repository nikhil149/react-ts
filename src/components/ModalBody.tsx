import React from "react";

import classes from "./ModalBody.module.css";
import oslash from "../assets/oslash.svg";
import person from "../assets/person.svg";
import Permissions from "./Permissions";

const ModalBody: React.FC<{
  invitedList: {
    name: string;
    email: string;
    permission: number;
  }[];
}> = ({ invitedList }) => {
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
        <Permissions />
      </div>
      {invitedList.map((invitedPerson) => (
        <div className={classes.bodyMainContainer_secondDiv_div}>
          <div className={classes.bodyMainContainer_secondDiv_div__first}>
            <div className={classes.bodyMainContainer_secondDiv_imgDiv}>
              <img
                className={classes.bodyMainContainer_secondDiv_img}
                src={person}
                alt="avatar"
              />
            </div>
            <div className={classes.bodyMainContainer_secondDiv_spanDiv}>
              <span className={classes.bodyMainContainer_secondDiv__span1}>
                {invitedPerson.name}
              </span>
              <span className={classes.bodyMainContainer_secondDiv__span2}>
                {invitedPerson.email}
              </span>
            </div>
          </div>
          <Permissions />
        </div>
      ))}
    </div>
  );
};

export default ModalBody;
