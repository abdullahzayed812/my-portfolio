import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / 5;
      const y = e.clientY / 5;
      contentRef.current.style.backgroundPositionX = -x + "px";
      contentRef.current.style.backgroundPositionY = -y + "px";
      console.log(x, y)
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="not-found-page" ref={contentRef}>
      <article className="not-found-page__content">
        <h2>404</h2>
        <h3>Opps! Page Not Found</h3>
        <p>
          The page you are looking for doesn't exist. You may have misstype the
          address or the page may have moved.
        </p>
        <Link to="/">Back To Home</Link>
      </article>
    </section>
  );
}
