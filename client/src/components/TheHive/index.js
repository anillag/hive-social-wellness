import React from "react";
import { GiTreeBeehive } from "react-icons/gi";
import { GiHoneycomb, GiDrippingHoney } from "react-icons/gi";
import { CgBee } from "react-icons/cg";
import { Link } from "react-router-dom";

const TheHive = () => {
  return (
    <div className="hiveFlex">
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <Link to="/the-buzz">
          <button className="hive-button rounded-3xl">
            <GiTreeBeehive />
            &nbsp; The Buzz!
          </button>
        </Link>
      </div>
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <Link to="/the-colony">
          <button className="hive-button rounded-3xl">
            <GiHoneycomb />
            &nbsp; The Colony!
          </button>
        </Link>
      </div>
      <div className="text-5xl px-6 py-3 text-[#222] hiveDiv">
        <Link to="/the-busy-bee">
          <button className="hive-button rounded-3xl">
            <CgBee />
            &nbsp; The Busy Bee!
          </button>
        </Link>
      </div>
      <GiDrippingHoney className="honey" />
    </div>
  );
};

export default TheHive;
