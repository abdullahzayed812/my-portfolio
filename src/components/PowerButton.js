import { NavLink } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

export function PowerButton() {
  return (
    <button className="power-btn">
      <NavLink to="/">
        <FaPowerOff />
      </NavLink>
    </button>
  );
}
