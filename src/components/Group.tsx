import React from "react";

import classes from "./Group.module.css";
import data from "../assets/data.json";

const Group: React.FC<{ searchText: string }> = ({ searchText }) => {
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
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                )
                .map((categoryNames: string) => (
                  <div className={classes.container__spanDiv}>
                    <span
                      key={categoryNames}
                      className={classes.container__spanDiv_span}
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
