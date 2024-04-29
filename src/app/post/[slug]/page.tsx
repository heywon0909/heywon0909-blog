import PostFeed from "@/components/post/PostFeed";
import { getPostInfo, getPost, getPosts } from "@/service/posts";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostInfo(slug);
  const postDetail = await getPost(slug);

  return (
    <div className="sm:w-2/3 w-11/12 flex">
      <PostFeed data={post} detail={postDetail} />
    </div>
  );
}
