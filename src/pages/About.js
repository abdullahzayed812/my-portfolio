import { Logo } from "../components/Logo";
import { PowerButton } from "../components/PowerButton";
import { SocialIcons } from "../components/SocialIcons";
import { BigTitle } from "../components/BigTitle";
import { ParticlesCom } from "../components/ParticlesCom";
import spaceman from "../assets/images/spaceman.png";

export function About() {
  return (
    <section className="about-page animate-page">
      <PowerButton />
      <Logo />
      <SocialIcons />
      <BigTitle
        content="ABOUT"
        left="5%"
        top="7%"
      />
      <ParticlesCom about />
      <figure className="about-page__image">
        <img src={spaceman} alt="spaceman-img" />
      </figure>
      <article className="about-page__text">
        <p>
          I'm a front-end developer located in Tanta, Egypt. I love to create simple
          yet beautiful websites with great user experience.<br /><br /> I'm interested in
          the whole frontend stack Like trying new things and building great
          projects.<br /><br /> I'm an independent freelancer and blogger. I love to write
          blogs and read books. <br /><br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </p>
      </article>
    </section>
  );
}
