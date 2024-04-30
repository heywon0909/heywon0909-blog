import { getPosts } from "@/service/posts";
import PostList from "./PostList";
import PostTitle from "./PostTitle";

export default async function PostSection() {
  const posts = await getPosts();
  return (
    <div className="w-11/12 h-96 flex flex-col">
      <PostTitle title="You may like" />
      <PostList posts={posts} />
    </div>
  );
}
