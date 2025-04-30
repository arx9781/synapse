export default function Footer() {
  return (
    <footer className="w-full border-t border-dashed border-primary/20 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-background-100/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-center border-0 md:border-x border-dashed border-primary/20 p-4 md:p-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Made with ♡ by{" "}
            <a
              href="https://github.com/arx9781"
              className="font-extrabold font-mono underline underline-offset-2"
            >
              adi
            </a>
          </p>
          <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-primary">
              © 2025 Synapse//
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
