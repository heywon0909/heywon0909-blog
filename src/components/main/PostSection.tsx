import { getPosts } from "@/service/posts";
import PostList from "./PostList";
import PostTitle from "./PostTitle";

export default async function PostSection() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col w-full">
      <PostTitle title="You may like" />
      <PostList posts={posts} />
    </div>
  );
}
