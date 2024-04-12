import { TPost } from "@/service/posts";
import Image from "next/image";

interface Props {
  post: TPost;
}
export default function Post({ post }: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-white p-2 shadow-md hover:bg-slate-50 cursor-pointer">
      <div className="relative">
        <Image
          src={`/blog/images/posts/${post.path}.png`}
          alt="profile"
          width="600"
          height="500"
        />
        <div className="bottom-2 right-2 absolute flex justify-center items-center w-20 h-auto p-2 rounded-md text-sm font-bold text-white bg-blue-700">
          {post.category}
        </div>
      </div>
      <div className="h-auto flex flex-col justify-center p-2 w-full">
        <div className="flex justify-end text-xs">{post.date}</div>
        <div className="w-full flex justify-center flex-col items-center gap-3">
          <div className="w-full flex justify-center flex-col items-center">
            <h1 className="font-semibold">{post.title}</h1>
            <span>{post.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
