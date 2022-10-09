import React from "react";
import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Popover,
} from "@mui/material";

import classes from "./Permissions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Permissions = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  const permissions = ["Full Access", "Can Edit", "Can View", "No Access"];
  return (
    <div>
      <Button
        className={classes.permission__button}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        {permissions[selectedIndex]}
        <FontAwesomeIcon icon={faCaretDown} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List component="nav" aria-label="secondary mailbox folder">
          {permissions.map((permission: string, id) => (
            <ListItemButton
              key={permission}
              selected={selectedIndex === id}
              onClick={(event) => handleListItemClick(event, id)}
            >
              <ListItemText primary={permission} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default Permissions;
