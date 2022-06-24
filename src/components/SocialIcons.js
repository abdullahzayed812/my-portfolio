import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function SocialIcons({ click }) {
  return (
    <section className={click ? "social-box white-color" : "social-box"}>
      <ul className="social-box__icons">
        <li className="social-box__icons__item animate-scale-3">
          <a
            href="https://github.com/abdullahzayed812"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-box__icons__item animate-scale-2">
          <a
            href="https://www.linkedin.com/in/abdullah-zayed-118911216/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="social-box__icons__item animate-scale-1">
          <a
            href="https://www.facebook.com/abdullah.zayed.940"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="social-box__icons__item animate-scale-0">
          <NavLink to="/">
            <FaYoutube />
          </NavLink>
        </li>
      </ul>
      <span className="social-box__line"></span>
    </section>
  );
}