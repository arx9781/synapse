import { JSX, ClassAttributes, ImgHTMLAttributes } from "react";
import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} />,
  h1: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>
  ) => (
    <h1
      {...props}
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
    />
  ),
  h2: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>
  ) => (
    <h2
      {...props}
      className="scroll-m-20 border-b py-2 mt-1 text-3xl font-semibold tracking-tight first:mt-0"
    />
  ),
  h3: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement>
  ) => (
    <h3
      {...props}
      className="scroll-m-20 py-2 mt-1 text-2xl font-semibold tracking-tight first:mt-0"
    />
  ),
  p: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement>
  ) => <p {...props} className="leading-7 mt-1 text-muted-foreground" />,
  code: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement>) => (
    <code
      {...props}
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
