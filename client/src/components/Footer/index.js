import React from "react";
import { AiOutlineLink, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#171718]">
      <div className="text-center py-6">
        <button className="transform hover:rotate-90 text-3xl px-6 text-[#f0c965]">
          <Link to="/links">
            <AiOutlineLink />
          </Link>
        </button>

        <button className="transform hover:rotate-180 text-3xl px-6 text-[#f0c965]">
          <a href="https://github.com/anillag/hive-social-wellness">
            <AiOutlineGithub />
          </a>
        </button>

        <button className="transform hover:rotate-180 text-3xl px-6 text-[#f0c965]">
          <Link to="contact">
            <AiOutlineMail />
          </Link>
        </button>

        <button className="transform hover:rotate-90 text-3xl px-6 text-[#f0c965]">
          <Link to="/donation">
            {" "}
            <RiMoneyDollarCircleFill />{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
