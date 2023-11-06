import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon" aria-label="social links">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} aria-label="social links">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} aria-label="social links">
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
