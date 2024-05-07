"use client";
import Link from "next/link";

export default function PostNavigation() {
  const navArr = [
    { category: "All Posts", index: 0 },
    {
      category: "javaScript",
      index: 1,
    },
    {
      category: "backend",
      index: 2,
    },
    {
      category: "my story",
      index: 3,
    },
  ];

  return (
    <ul className="p-2 flex flex-col gap-4 justify-center text-base">
      {navArr.map((nav) => (
        <Link
          key={nav.index}
          href={`/posts/${nav.category}`}
          className={`hover:text-zinc-300 hover:border-b h-6`}
        >
          {nav.category}
        </Link>
      ))}
    </ul>
  );
}
