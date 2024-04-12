import { TPost } from "@/service/posts";
import Image from "next/image";
import profile from "../../public/blog/images/posts/best-react-practices.png";

interface Props {
  post: TPost;
}
export default function Post({ post }: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-white p-2 shadow-md hover:bg-slate-50">
      <Image
        src={`/blog/images/posts/${post.path}.png`}
        alt="profile"
        width="500"
        height="500"
      />
      <div className="h-auto flex flex-col justify-center p-2 w-full">
        <div className="flex justify-end text-xs">{post.date}</div>
        <div className="w-full flex justify-center flex-col items-center gap-3">
          <div className="w-full flex justify-center flex-col items-center">
            <h1 className="font-semibold">{post.title}</h1>
            <span>{post.description}</span>
          </div>
          <div className="flex justify-center items-center w-20 h-auto bg-blue-500 p-2 rounded-full text-sm text-white">
            {post.category}
          </div>
        </div>
      </div>
    </div>
  );
}
