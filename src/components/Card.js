import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Card({ projectData, index }) {
  const { name, description, tags, demo } = projectData;

  return (
    <li className={`work-page__content__item animate-scale-${index}`}>
      <h2 className="work-page__content__item__title">{name}</h2>
      <p className="work-page__content__item__description">{description}</p>
      <article className="work-page__content__item__tags">
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </article>
      <section className="work-page__content__item__links">
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
        <Link to="work">
          <FaGithub />
        </Link>
      </section>
    </li>
  );
}