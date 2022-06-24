import { useEffect, useRef } from "react";
import { Logo } from "../components/Logo";
import { PowerButton } from "../components/PowerButton";
import { SocialIcons } from "../components/SocialIcons";
import { BigTitle } from "../components/BigTitle";
import { work } from "../data/work";
import { Card } from "../components/Card";
import { GiYinYang } from "react-icons/gi";

export function Work() {
  const workContentRef = useRef(null);
  const yinRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      workContentRef.current.style.transform = `translateX(${-window.scrollY}px)`;
      yinRef.current.style.transform = `rotate(${-window.scrollY}deg)`
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="work-page animate-page">
      <Logo />
      <PowerButton />
      <SocialIcons />
      <BigTitle
        content="WORK"
        right="20%"
        top="10%"
      />
      <ul className="work-page__content" ref={workContentRef}>
        {work.map((project, index) => (
          <Card key={project.id} projectData={project} index={index} />
        ))}
      </ul>
      <div className="work-page__yin-yang" ref={yinRef}>
        <GiYinYang />
      </div>
    </section>
  );
}
