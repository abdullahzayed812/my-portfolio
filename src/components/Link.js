import { NavLink } from "react-router-dom";

export function Link({ path, content, className, target, click }) {
  return (
    <NavLink
      to={path}
      target={target}
      className={`link ${className} ${click ? "white-color" : ""}`}
    >
      <h3>{content}</h3>
    </NavLink>
  );
}
