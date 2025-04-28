import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export function Navbar() {
  return (
    <header>
      <nav className="w-full border-b border-dashed border-primary/20 backdrop-blur-xl fixed top-0 z-50 supports-[backdrop-filter]:bg-background-100/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between border-0 md:border-x border-dashed border-primary/20 p-4 md:p-6">
          <Link href={"/"}>
            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl font-mono duration-100 ease-in-out text-foreground hover:text-primary">
              Synapse//
            </h1>
          </Link>
          <div className="gap-4">
            <ThemeToggle />
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
