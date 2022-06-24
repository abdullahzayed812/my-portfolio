import { PowerButton } from "../components/PowerButton";
import { Logo } from "../components/Logo";
import { SocialIcons } from "../components/SocialIcons";
import { Link } from "../components/Link";
import { useState } from "react";
import { BottomLinks } from "../components/BottomLinks";
import { YinYang } from "../components/YinYang";
import { DarkSection } from "../components/DarkSection";
import { Intro} from "../components/Intro";

export function Home() {
  const [click, setClick] = useState(false);

  return (
    <section className="home-page container animate-page">
      <PowerButton />
      <Logo click={click} />
      <SocialIcons click={click} />
      <YinYang
        click={click}
        setClick={setClick}
      />
      <DarkSection click={click} />
      { click && <Intro click={click} /> }
      <a
        href="mailto:aabdullah.zayed0099@gmail.com"
        className="link say-hi-link"
      >
        Say Hi
      </a>
      <Link
        className="blog-link"
        content="Blogs"
        path="blog"
      />
      <Link
        className="work-link"
        content="Work"
        path="work"
        click={click}
      />
      <BottomLinks click={click} />
    </section>
  );
}
