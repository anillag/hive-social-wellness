import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import { GiHoneycomb } from "react-icons/gi";
import { CgBee } from "react-icons/cg";
const TheHive = () => {
  return (
    <div className="hiveFlex">
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <button>
          <GiTreeBeehive />
          The Buzz!
        </button>
      </div>
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <button>
          <GiHoneycomb />
          The Colony!
        </button>
      </div>
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <button>
          <CgBee />
          Busy Bee!
        </button>
      </div>
    </div>
  );
};

export default TheHive;
