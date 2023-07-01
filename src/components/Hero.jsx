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
        Explain uni stuff for you with <br className="mx-md:hidden" />
        <span className="teal_gradient">Stepla:UniExplained</span>
      </h1>
      <h2 className="desc">
        <span className="font-bold text-gray-500">
          {" "}
          👩‍💻 Beta Version: Some more complicated links might not work as expected.
          Currently work in progress... 🐾
        </span>{" "}
        <br />
        <br />
        <span className="font-medium text-teal-800">
          Navigating through university pages and documents can often feel overwhelming
          and confusing for high school students. <br /> <br />
          That's why we've created Stepla: UniExplained, a handy tool designed to make
          understanding the important stuff a breeze.
        </span>{" "}
        <br />
        <br />
        <span className="font-light text-teal-600">
          We recommend starting with a single-page application to get a taste of its
          magic. This can be orientation document, handbook, course suggestion or any
          other document that is in a single page, with a lot of text.
        </span>
        <br />
        <br />
        <span className="text-sm font-light text-gray-400 text-center">
          Please note that we are currently in the beta version, so there might minor
          hiccups along the way. <br />
          But rest assured, we're working tirelessly to improve and enhance the platform.
          💪
        </span>
      </h2>
    </header>
  );
};

export default Hero;
