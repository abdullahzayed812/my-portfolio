import { GiYinYang } from "react-icons/gi";

export function YinYang({ click, setClick }) {
  return (
    <button
      onClick={() => setClick(prev => !prev)}
      className={`yinyang ${click ? "move" : ""}`}
    >
      <GiYinYang />
      <span>Click Here</span>
    </button>
  )
}