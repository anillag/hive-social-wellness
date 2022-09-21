import React, { useState } from "react";
import Item from "../components/Item";
import List from "../components/List";

const TheBusyBee = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const addItem = () => {};
  const removeItem = () => {};

  return (
    <div className="TheBusyBee hiveFlex">
      <h2 className="bg-yellow-400 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-5 border-orange-400 rounded-lg">
        My Busy Bee List:
      </h2>

      <List items={this.state.items} action={this.removeItem}></List>

      <div className="flex justify-center">
        <form onSubmit={this.addItem}>
          <div className="space-x-5">
            <input
              placeholder="Goal or Task"
              className="pl-2 p-2 border-2 border-yellow-500 rounded-lg w-64"
              type="text"
              value={this.state.input}
              onChange={this.handleInput}
            ></input>
            <button
              className="hover:bg-orange-50 hover:text-yellow-800 bg-orange-500 rounded-md text-white px-5 text-xl py-1"
              type="submit"
              name="action"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TheBusyBee;
