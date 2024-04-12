import { getPosts } from "@/service/posts";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  const posts = await getPosts();
  return NextResponse.json({ posts });
}
