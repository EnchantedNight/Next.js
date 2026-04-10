import Link from "next/link";

export default () => {
  return (
    <header className="flex items-center justify-between border-b border-black/10 pb-4 sm:pb-5">
      <Link href="/" className="text-xs uppercase tracking-[0.2em] text-black/50">
        Next.js template
      </Link>
    </header>
  );
};
