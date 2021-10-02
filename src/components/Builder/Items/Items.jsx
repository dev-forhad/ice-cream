import React from "react";
import Item from "./Item/Item";

const Items = ({items, add , remove, scoops}) => {
  const flavours = Object.keys(items);
  return (
    <div >
      <ul>
        {flavours.map((flavour) => (
          <Item key = {flavour} name = {flavour} add={add} remove={remove}  scoops={scoops}/>
        ))}
      </ul>
    </div>
  );
};
export default Items;
