import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author?: string;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  author,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-4 border-b border-dashed border-primary/20 mb-6">
      <div>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          <Link href={slug}>{title}</Link>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base flex items-center gap-2 font-mono">
          {author ? `— ${author}` : `<Anoynymous>`}
        </p>
      </div>
      <div className="max-w-none leading-7 text-muted-foreground">
        {description}
      </div>
      <div className="flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-muted-foreground text-sm sm:text-base flex items-center gap-2 font-mono">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={slug}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "py-0 px-0"
                  )}
                >
                  <ChevronRight className="px-0" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Read More</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </article>
  );
}
