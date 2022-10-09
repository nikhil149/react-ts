import React from "react";

import classes from "./Group.module.css";
import data from "../assets/data.json";

const Group: React.FC<{ searchText: string, onSelectHandler: (value: string)=> void }> = ({ searchText, onSelectHandler }) => {

  const getSelectName = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
    onSelectHandler(e.currentTarget?.innerText);
    
  }

  return (
    <div className={classes.container}>
      <div className={classes.container_div}>
        {data.map((value, id) => (
          <div key={value.category} className={classes.container_div__groupDiv}>
            <div className={classes.container_div__groupDiv_div}>
              <span
                className={classes.container__span}
              >{`Select a ${value.category}`}</span>
            </div>
            <div className={classes.container_div__groupDiv__secondDiv}>
              {value.names
                .filter((catNames) =>
                  catNames
                    .trim()
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
                .map((categoryNames: string) => (
                  <div key={categoryNames} className={classes.container__spanDiv}>
                    <span
                      key={categoryNames}
                      className={classes.container__spanDiv_span}
                      onClick={getSelectName}
                    >
                      {categoryNames}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
