import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <>
      <div className="pt-20 pb-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Posts
        </h1>
        <p className="leading-7 mt-2 text-muted-foreground">
          Writing about random things I have opinions on.
        </p>
      </div>
      <hr className="mb-5 border-primary/20 border-dashed" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, title, description, date } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-muted-foreground">No posts found.</p>
      )}
    </>
  );
}
