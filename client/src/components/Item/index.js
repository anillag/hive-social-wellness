import React from "react";

const Item = (props) => {
  return (
    <div className="bg-white text-center m-5 rounded-xl p-6 w-2/6">
      <div className="flex justify-between space-x-5">
        <h5 className="font-sans font-semibold text-lg">{props.name}</h5>
        <button
          onClick={() => props.action(props.deleteId)}
          className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Item;
