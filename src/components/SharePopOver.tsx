import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import React, { useState } from "react";
import Group from "./Group";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import Permissions from "./Permissions";
import data from "../assets/data.json";

import classes from "./SharePop.module.css";

const SharePopOver: React.FC<{}> = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [selectedValue, setSelctedValue] = useState<string[]>([]);

  const [invitedList, setInvitedList] = useState<
    { name: string; email: string; permission: number }[]
  >([]);

  const handleDelete = (chipToDelete: string) => {
    setSelctedValue((prevState) =>
      prevState.filter((value) => value !== chipToDelete)
    );
  };

  const inviteHandler = () => {
    const personDetails = data.filter((personObject) =>
      personObject.names.includes(selectedValue[0])
    );
    const nameIndex = personDetails[0].names.indexOf(selectedValue[0]);
    const invitedPerson = {
      name: personDetails[0].names[nameIndex],
      email: personDetails[0].emails[nameIndex],
      permission: personDetails[0].permissions[nameIndex],
    };

    setInvitedList((prevState) => [...prevState, invitedPerson]);
    setIsFocus(false)
    handleDelete(invitedPerson.name)
  };

  const focusChangeHandler = () => {
    setIsFocus(true);
  };
  const blurChangeHandler = () => {
    // setIsFocus(false);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const selectNameHandler = (value: string) => {
    setSelctedValue((prevState) => [...new Set([...prevState, value])]);
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
                    value={searchValue}
                    onChange={inputChangeHandler}
                    onFocus={focusChangeHandler}
                    onBlur={blurChangeHandler}
                  />
                  {selectedValue.map((value) => (
                    <Chip
                      className={classes.chip}
                      key={value}
                      label={value}
                      onDelete={() => handleDelete(value)}
                    />
                  ))}
                  {isFocus && <Permissions />}
                  <button
                    className={classes.inputComponent_button}
                    type="button"
                    onClick={inviteHandler}
                  >
                    invite
                  </button>
                </div>
              </div>
              {isFocus ? (
                <Group
                  searchText={searchValue}
                  onSelectHandler={selectNameHandler}
                />
              ) : (
                <ModalBody invitedList={invitedList} />
              )}
            </div>
          </div>
        </div>
        <ModalFooter />
      </div>
    </div>
  );
};

export default SharePopOver;
