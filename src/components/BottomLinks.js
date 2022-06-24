import { Link } from "./Link";

export function BottomLinks({ click }) {
  return (
    <section className="bottom-links">
      <Link
        path="about"
        content="About"
        click={click}
      />
      <Link
        path="skills"
        content="My Skills"
      />
    </section>
  )
}