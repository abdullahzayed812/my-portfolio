export function BigTitle({ top, left, right, blog, content }) {
  return (
    <h2
      className={`big-title ${blog ? "in-blog" : ""}`}
      style={{
        top,
        left,
        right,
      }}
    >
      {content}
    </h2>
  );
}