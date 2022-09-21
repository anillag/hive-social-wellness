import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import List from "../components/List";
import { ADD_TODO, REMOVE_TODO } from "../utils/mutations";
import { QUERY_TODOS } from "../utils/queries";

const TheBusyBee = () => {
  const [inputForm, setInputForm] = useState("");

  const [addTodo, { error }] = useMutation(ADD_TODO);
  const [removeTodo] = useMutation(REMOVE_TODO);

  const { data, loading } = useQuery(QUERY_TODOS);
  const handleInput = (event) => {
    setInputForm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error) {
      throw error;
    }
    await addTodo({
      variables: { todoItem: inputForm },
    });
    window.location.reload();
  };

  const removeItem = async (id) => {
    try {
      await removeTodo({
        variables: { _id: id },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="TheBusyBee hiveFlex">
      <h2 className="bg-yellow-400 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-5 border-orange-400 rounded-lg">
        My Busy Bee List:
      </h2>

      {loading ? (
        "Loading..."
      ) : (
        <List items={data?.todos} action={removeItem}></List>
      )}

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="space-x-5">
            <input
              placeholder="Goal or Task"
              className="pl-2 p-2 border-2 border-yellow-500 rounded-lg w-64"
              type="text"
              value={inputForm}
              onChange={handleInput}
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
