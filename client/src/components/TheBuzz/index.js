import React from "react";

const TheBuzz = () => {
  return (
    <div className=" hiveFlex">
      <form className="text-2xl px-6 py-3 text-[#222]">
        <textarea
          placeholder="Tell the Hive what's on your mind..."
          className="buzz-text text-xs"
        ></textarea>
        <button className="rounded-2xl buzz-button flex items-center justify-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TheBuzz;
