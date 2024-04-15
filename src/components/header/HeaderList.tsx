import Link from "next/link";

export default function HeaderList() {
  return (
    <div className="flex gap-4 text-base font-mono">
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/posts">posts</Link>
      <Link href="/contact">contact</Link>
    </div>
  );
}
