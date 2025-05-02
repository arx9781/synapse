import { Button } from "@/components/ui/button";
import { sortPosts, cn } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);

  return (
    <section className="pt-20 pb-5">
      <div className="flex md:flex-row flex-col justify-between items-start md:items-center mb-4">
        <div className="pb-3 md:pb-0">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Latest Posts
          </h1>
          <p className="leading-7 mt-2 text-muted-foreground">
            Querying posts in the order they were published.
          </p>
        </div>
        <Link href="/blog">
          <Button variant="default">View All Posts</Button>
        </Link>
      </div>
      <hr className="mb-5 border-primary/20 border-dashed" />
      <ul className="flex flex-col">
        {latestPosts.map((post) => (
          <li key={post.slug}>
            <PostItem
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              author={post.author}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
