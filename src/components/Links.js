import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Links = () => {
  return (
    <>
      <div className="container links-box">
        <a
          href="https://leetcode.com/u/Codelearner6742AP/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode size="25px" />
        </a>

        <a
          href="https://www.linkedin.com/in/ayush-raghuvanshi-382a2324b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="25px" />
        </a>

        <a
          href="https://github.com/Codelearner6742AP"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="25px" />
        </a>

        <a
          href="mailto:editzayushraghuvanshi@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail size="25px" />
        </a>
      </div>
    </>
  );
};

export default Links;
