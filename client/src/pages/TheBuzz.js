import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
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
      {/* <div className=" hiveFlex">
        <form className="text-2xl px-6 py-3 text-[#222]">
          <textarea
            placeholder="Tell the Hive what's on your mind..."
            className="buzz-text text-xs"
          ></textarea>
          <button className="rounded-2xl buzz-button flex items-center justify-center ">
            Submit
          </button>
        </form>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            // <div>Done loading!</div>
            <ThoughtList thoughts={thoughts} title="Here's The Buzz..." />
          )}
        </div>
      </div> */}
    </div>
  );
};

export default TheBuzz;