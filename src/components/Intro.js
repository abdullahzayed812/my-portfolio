import introImg from "../assets/images/profile-img.png";

export function Intro({ click }) {
  return (
    <article className="intro">
      <article className="intro__info">
        <h2 className="font-size-1">Hi,</h2>
        <h3 className="font-size-2">I'm Abdullah.</h3>
        <h4 className="font-size-3">I design and code simple yet <br /> beautiful websites.</h4>
      </article>
      <figure className="intro__image">
        <img src={introImg} alt="profile-img" />
      </figure>
    </article>
  )
}