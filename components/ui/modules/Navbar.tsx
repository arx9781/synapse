import Link from "next/link";
import { Button } from "../button";

export function Navbar() {
  return (
    <nav className="w-full border-b border-dashed border-primary/20 backdrop-blur-xl fixed top-0 z-50 bg-base-100/95">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between border-0 md:border-x border-dashed border-primary/20 p-4 md:p-6 origin-left">
        <Link href={"/"}>
          <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl font-mono hover:scale-105 duration-100 ease-in-out text-foreground hover:text-primary">
            Synapse//
          </h1>
        </Link>
        <Link href={"/blog"}>
          <Button variant="link" className="cursor-pointer">
            Blog
          </Button>
        </Link>
      </div>
    </nav>
  );
}
