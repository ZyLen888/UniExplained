import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="stepla_logo" className="w-28 object-contain" />

        <button
          type="button"
          className="teal_btn"
          onClick={() => {
            window.open("https://stepla.com");
          }}
        >
          Visit stepla Website
        </button>
      </nav>
      <h1 className="head_text">
        Explain uni stuff for you with <br class="mx-md:hidden" />
        <span className="teal_gradient">Stepla:UniExplain</span>
      </h1>
      <h2 className="desc">
        <span className="font-bold text-teal-800">What do I actually need to know?</span>{" "}
        <br />
        <br />
        We know how hard it to read through pages of university handbook, orientation
        page, and many other documents. <br />
        <br />
        So we made it easier for you to understand the important stuff. <br />
      </h2>
    </header>
  );
};

export default Hero;
