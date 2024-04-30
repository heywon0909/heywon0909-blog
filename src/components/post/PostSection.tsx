import { getPosts } from "@/service/posts";
import PostList from "./PostList";

export default async function PostSection() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
