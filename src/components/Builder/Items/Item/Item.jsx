import { countBy } from "lodash";
import React from "react";
import classes from "./Item.module.css";
const Item = ({name, add, remove, scoops={} }) => {
  const countByScoop = countBy(scoops);
  console.log(countByScoop);
  return (
    <li className={classes.item}>
      <span>{name}</span>
       {countByScoop[name]>=0 ? (<span className={classes.quantity}>{countByScoop[name]}</span>) : null}
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
