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
        <span className="teal_gradient">Stepla:UniExplain</span>
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
          We know sometimes uni pages or documents may seem overwhelming.
        </span>{" "}
        <br />
        <span className="font-medium text-teal-800">
          So we made it easier for you to understand the important stuff.
        </span>{" "}
        <br />
        <br />
        <span className="font-light text-teal-600">
          To test it out, we recommend try with a single page application first. This can
          be orientation document, handbook, course suggestion or any other document that
          is in a single page, with a lot of text.
        </span>
      </h2>
    </header>
  );
};

export default Hero;
