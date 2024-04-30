import { TPost } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: TPost;
}
export default function Post({ post }: Props) {
  return (
    <Link
      href={`/post/${post.id}`}
      className="flex flex-col bg-zinc-800 cursor-pointer justify-between w-full rounded-lg"
    >
      <Image
        src={`/blog/images/posts/${post.path}.png`}
        alt="profile"
        width="500"
        height="300"
        className="rounded-lg w-full"
      />
      <div className="flex flex-col justify-center p-2 w-full text-white">
        <div className="flex justify-end text-xs">{post.date}</div>
        <div className="w-full flex justify-center flex-col items-center gap-8">
          <div className="w-full flex flex-col gap-5">
            <h1 className="font-bold text-xl">{post.title}</h1>
            <span className="font-light text-base text-zinc-300">
              {post.description}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
