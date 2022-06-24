import { PowerButton } from "../components/PowerButton";
import { Logo } from "../components/Logo";
import { SocialIcons } from "../components/SocialIcons";
import { IoMdColorPalette } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { ParticlesCom } from "../components/ParticlesCom";

export function MySkills() {
  return (
    <section className="my-skills-page animate-page">
      <PowerButton />
      <Logo />
      <SocialIcons />
      <ParticlesCom />
      <article className="my-skills-page__box">
        <h2 className="my-skills-page__box__title">
          <IoMdColorPalette /> Designer
        </h2>
        <p className="my-skills-page__box__discription">
          I love to create design which speaks, Keep it clean, minimal and
          simple.
        </p>
        <div>
          <h3>I LIKE TO DESIGN</h3>
          <ul>
            <li>Web Design</li>
            <li>Mobile Apps</li>
          </ul>
        </div>
        <div>
          <h3>TOOLS</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </article>
      <article className="my-skills-page__box">
        <h2 className="my-skills-page__box__title">
          <FaLaptopCode /> Frontend Developer
        </h2>
        <p className="my-skills-page__box__discription">
          I value business or brand for which i'm creating, thus i enjoy
          bringing new ideas to life.
        </p>
        <div>
          <h3>SKILLS</h3>
          <p className="skills">
            HTML, CSS, JavaScript, DOM, BOM, OOP JS, React, Redux, Sass,
            Bootstarb, Tailwind, Nodejs
          </p>
        </div>
        <div>
          <h3>TOOLS</h3>
          <p className="skills">VScode, Codepen, Git, Gitub</p>
        </div>
      </article>
    </section>
  );
}
