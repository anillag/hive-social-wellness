import React, { useState } from "react";
import ThoughtForm from "../ThoughtForm";

const TheBusyBee = () => {
  const [goalField, setGoalField] = useState([
    {
      complete: false,
      goal: "",
    },
  ]);
  // let list = [];
  const addNewGoal = () => {
    setGoalField([
      ...goalField,
      {
        complete: false,
        goal: "",
      },
    ]);
  };
  const removeGoal = (index) => {
    const list = [...goalField];
    list.splice(index, 1);
    setGoalField(list);
  };
  // once backend connects, change logic^ index will be id, set delete goal by id
  // onBlur save, or save button

  return (
    <div className="hiveFlex">
      <ThoughtForm />
      <div className=" w-full p-5 flex justify-center">
        <div className="w-1/2 flex-row justify-center">
          <div className="w-full flex justify-end">
            <button
              className="buzz-button rounded-3xl"
              type="button"
              onClick={addNewGoal}
            >
              Add Goal!
            </button>
          </div>
          <div className="w-full flex-row justify-center">
            {goalField.map((goal, i) => (
              <div key={i}>
                <input type="checkbox" defaultValue={goal.complete} />
                <input
                  className="buzz-text m-5"
                  type="text"
                  placeholder="Enter A New Goal Here!"
                  defaultValue={goal.goal}
                />
                <button
                  type="button"
                  onClick={() => removeGoal(i)}
                  className=""
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBusyBee;
