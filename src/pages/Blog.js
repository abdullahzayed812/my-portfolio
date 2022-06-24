import { PowerButton } from "../components/PowerButton";
import { Logo } from "../components/Logo";
import { SocialIcons } from "../components/SocialIcons";
import { BigTitle } from "../components/BigTitle";
import { Blogs } from "../data/blogs";
import { BlogBox } from "../components/BlogBox";
import { Anchor } from "../components/Anchor";

export function Blog() {
  return (
    <section className="blog-page animate-page">
      <section className="container">
        <PowerButton />
        <Logo />
        <SocialIcons />
        <BigTitle
          content="BLOG"
          top="5rem"
          left="5rem"
          blog
        />
        <article className="blogs-box grid-col-2">
          {Blogs.map((blog, index) => (
            <BlogBox blogData={blog} key={blog.id} index={index} />
          ))}
        </article>
        <Anchor />
      </section>
    </section>
  );
}
