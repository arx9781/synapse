import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

const POST_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );

  return (
    <>
      <section className="pt-20 pb-5">
        <div className="mb-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            All Posts
          </h1>
          <p className="leading-7 mt-2 text-muted-foreground">
            Writing about random things I have opinions on.
          </p>
        </div>
        <hr className="mb-5 border-primary/20 border-dashed" />
        {displayPosts?.length > 0 ? (
          <ul className="flex flex-col">
            {displayPosts.map((post) => {
              const { slug, title, description, date, author } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    title={title}
                    description={description}
                    date={date}
                    author={author}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-muted-foreground">No posts found.</p>
        )}
        <QueryPagination
          totalPages={totalPages}
          className="my-10 justify-end"
        />
      </section>
    </>
  );
}
