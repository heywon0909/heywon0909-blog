import { getPosts } from "@/service/posts";
import PostList from "./PostList";

interface Props {
  pathname?: string;
}
export default async function PostSection({ pathname }: Props) {
  const posts = await getPosts(pathname ?? undefined);

  return <PostList posts={posts} />;
}
