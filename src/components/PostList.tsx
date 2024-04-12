import { TPost, getPosts } from "@/service/posts";
import Post from "./Post";

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div className="w-full grid md:grid-rows-3 md:grid-flow-col gap-5">
      {posts.map((post) => (
        <Post post={post} key={post.title} />
      ))}
    </div>
  );
}