import React from "react";
import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";

const TheBuzz = () => {
  return (
    <div className="hiveFlex">
      <div className="flex justify-center">
        {" "}
        <ThoughtForm />
      </div>
      <br />
      <div className="flex justify-center max-h-1">
        {" "}
        <ThoughtList />
      </div>
    </div>
  );
};

export default TheBuzz;
