export function Logo({ click }) {
  return (
    <h1 className={`logo ${click ? "white-color" : ""}`}>
      CB
    </h1>
  );
}
