"use client";
import { TPost } from "@/service/posts";
import Post from "../common/Post";
interface Props {
  posts: Array<TPost>;
}
export default function PostList({ posts }: Props) {
  console.log("posts", posts);
  const isPosts = Array.isArray(posts) && posts.length > 0;
  if (isPosts) {
    return (
      <div className="grid grid-cols-3 gap-4 mb-20">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
  return <div>포스트가 존재하지 않습니다.</div>;
}
