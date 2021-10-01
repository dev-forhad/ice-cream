import React from "react";
import classes from "./Item.module.css";

const Item = ({name, add, remove}) => {
  return (
    <li className={classes.item}>
      <span>{name}</span>
      <span className={classes.quantity}>2</span>
      <div className="right">
        <button onClick={add.bind(this, name)} type="button" className={[classes.plus, "rounded"].join(" ")}>
          +
        </button>
        <button onClick={remove.bind(this, name)} type="button" className={[classes.minus, "rounded"].join(" ")}>
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
