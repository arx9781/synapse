import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <div className="pt-20 pb-5">
        <article className="container mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
            {post.title}
          </h1>
          {post.description ? (
            <p className="leading-7 text-xl text-muted-foreground">
              {post.description}
            </p>
          ) : null}
          <hr className="my-5 border-primary/20 border-dashed" />
          <MDXContent code={post.body} />
        </article>
      </div>
    </>
  );
}
