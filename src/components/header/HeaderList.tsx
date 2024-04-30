import Link from "next/link";

export default function HeaderList() {
  return (
    <div className="flex gap-4 text-base text-zinc-200 ">
      <Link href="/" className="hover:text-white">
        Home
      </Link>
      <Link href="/about" className="hover:text-white">
        about
      </Link>
      <Link href="/post" className="hover:text-white">
        posts
      </Link>
      <Link href="/contact" className="hover:text-white">
        contact
      </Link>
    </div>
  );
}
