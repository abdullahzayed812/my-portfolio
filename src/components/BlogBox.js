export function BlogBox({ blogData, index }) {
  const { name, tags, date, imgSrc, link } = blogData;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <article className={`blog-box animate-scale-${index}`}>
        <img src={imgSrc} alt={name} />
        <article className="blog-box__text">
          <p className="blog-box__text__name">{name}</p>
          <hr />
          <div>
            {tags.map((tag, index) => (
              <span key={index}>#{tag}</span>
            ))}
          </div>
          <div className="blog-box__text__date">{date}</div>
        </article>
      </article>
    </a>
  );
}