import React from "react";
import Item from "../Item";

function List(props) {
  return (
    <div className="grid justify-items-center">
      {props.items?.map((item, index) => {
        return (
          <Item
            name={item.todoItem}
            deleteId={item._id}
            key={index}
            action={props.action}
          ></Item>
        );
      })}
    </div>
  );
}

export default List;
