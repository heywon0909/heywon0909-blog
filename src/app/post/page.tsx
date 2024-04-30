import PostList from "@/components/post/PostSection";

export default function PostPage() {
  return (
    <div className="w-11/12 flex">
      <div className="w-11/12 flex flex-col justify-center h-full">
        <PostList />
      </div>
      <div className=" w-1/12 flex  text-white top-0 flex-col items-end">
        <h2 className="text-xl font-bold border-b-2 border-cyan-100">
          Category
        </h2>
        <ul className="p-2 flex flex-col gap-2 justify-center text-base">
          <li>All Posts</li>
          <li>javaScript</li>
          <li>backend</li>
          <li>my story</li>
        </ul>
      </div>
    </div>
  );
}
