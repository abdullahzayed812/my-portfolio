import { useEffect, useRef, useState } from "react";
import { FaAnchor } from "react-icons/fa";
import { CgChanel } from "react-icons/cg";

export function Anchor() {
  const [chaneNumber, setChaneNumber] = useState(0);
  const anchorBoxRef = useRef(null);
  const hiddenAnchorRef = useRef(null);

  useEffect(() => {
    const value = window.innerHeight / 32;
    setChaneNumber(value);
  }, [])
   
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      const bottomHeight = bodyHeight - (scrollValue + windowHeight);
      const transformValue = (bottomHeight * 100) / (bodyHeight - windowHeight);

      anchorBoxRef.current.style.transform = `translateY(${-transformValue}%)`;

      if (window.scrollY >= 5) {
        hiddenAnchorRef.current.style.display = "none";
      } else {
        hiddenAnchorRef.current.style.display = "inline-block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <div className="fixed-anchor" ref={hiddenAnchorRef}>
        <FaAnchor />
      </div>
      <section className="anchor-box" ref={anchorBoxRef}>
        {Array.from({ length: chaneNumber }).map((_, index) => (
          <CgChanel className="anchor-box__chane" key={index} />
        ))}
        <FaAnchor className="anchor-box__anchor" />
      </section>
    </>
  );
}