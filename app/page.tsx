import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="py-6 sm:py-12 flex items-center justify-center h-screen gap-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hello, fancy a blog? <br />
          <Link href={"/blog"}>
            <Button variant={"outline"}>Click here</Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
