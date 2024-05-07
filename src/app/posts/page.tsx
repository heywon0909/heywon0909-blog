import PostNavigation from "@/components/post/PostNavigation";
import PostList from "@/components/post/PostSection";

export default function PostPage() {
  return (
    <div className="md:w-5/6 w-full flex">
      <div className="md:w-5/6 w-full flex flex-col justify-center h-full">
        <PostList />
      </div>
      <div className=" w-1/6 lg:flex  text-white top-0 flex-col items-end hidden">
        <h2 className="text-xl font-bold border-b-2 border-cyan-100">
          Category
        </h2>
        <PostNavigation />
      </div>
    </div>
  );
}
