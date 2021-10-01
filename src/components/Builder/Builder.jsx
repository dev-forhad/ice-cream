import React from "react";
import classes from "./Builder.module.css";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = ({items, price, add, remove}) => {
  return (
    <div className={classes.builder}>
      <h3>Build your own Ice Cream Sundae</h3>

      <Items items={items} add={add} remove={remove} />

      <TotalPrice price = {price} />

      <button type="button" className={[classes.order, "rounded"].join(" ")}>
        Add to Cart
      </button>
      <Modal>hello Modal</Modal>
    </div>
  );
};

export default Builder;
