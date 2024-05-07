"use client";
import { usePathname } from "next/navigation";
import PostSection from "./PostSection";

export default function PostDynamic() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return <PostSection pathname={pathname} />;
}
