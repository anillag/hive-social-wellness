import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import { GiHoneycomb } from "react-icons/gi";
import { CgBee } from "react-icons/cg";
import { Link } from "react-router-dom";

const TheHive = () => {
  return (
    <div className="hiveFlex">
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <Link to="/the-buzz">
          <button>
            <GiTreeBeehive />
            The Buzz!
          </button>
        </Link>
      </div>
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <Link to="/the-colony">
          <button>
            <GiHoneycomb />
            The Colony!
          </button>
        </Link>
      </div>
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <Link to="/the-busy-bee">
          <button>
            <CgBee />
            The Busy Bee!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TheHive;
