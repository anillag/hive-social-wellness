import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../../utils/queries";
import ThoughtForm from "../ThoughtForm";
import ThoughtList from "../ThoughtList";

const TheBuzz = () => {
  return (
    <div>
      <ThoughtForm />
      <br />
      <ThoughtList />
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
