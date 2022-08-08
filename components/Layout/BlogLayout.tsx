import Image from "next/future/image";
import { MDXRemote } from "next-mdx-remote";
import Hero from "../../components/Content/Hero";
import { BlogType, MDXContentType } from "../../lib/types";

interface Props {
  data: BlogType[];
  content: MDXContentType[];
}

const BlogLayout = ({ data, content }: Props) => {
  const MDXComponents = {
    p: (props: { children: string }) => (
      <p className="text-base leading-10 text-black" {...props} />
    ),
    img: (props: { src: string; alt: string }) => (
      <div className="pb-4">
        <Image
          src={props.src}
          alt={props.alt}
          width={768}
          height={768}
          className="pt-8 pb-4"
        />
        <figcaption className="text-center text-xs text-neutral-800">
          {props.alt}
        </figcaption>
      </div>
    )
  };

  return (
    <>
      <Hero date={data.date} title={data.title} intro={data.description} />
      <section className="mb-48">
        <div className="mx-auto max-w-screen-xl">
          <Image
            src={data.hero}
            alt={data.alt}
            width={1280}
            height={1280}
            className="py-8"
          />
        </div>
        <div className="mx-auto max-w-screen-md">
          <div className="my-32 space-y-10">
            <MDXRemote {...content} components={MDXComponents} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
