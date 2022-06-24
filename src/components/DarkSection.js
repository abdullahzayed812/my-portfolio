export function DarkSection({ click }) {
  return (
    <section className={`dark-section ${click ? "open" : ""}`}></section>
  );
}