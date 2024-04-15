"use client";
import { TPost } from "@/service/posts";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  data: TPost;
  detail: string;
}
export default function PostFeed({ data, detail }: Props) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-5 bg-blue-50 p-2">
        <Image
          src={`/blog/images/posts/${data.path}.png`}
          alt={`${data.description}`}
          width="1200"
          height="200"
        />
        <div className="w-auto flex flex-col gap-3 relative">
          <h1 className="text-2xl font-extrabold">{data.title}</h1>
          <div className="w-full">
            <h1 className="text-lg font-semibold">description</h1>
            <span className="text-sm">{data.description}</span>
          </div>
          <div className="w-full text-right">
            <span className="text-sm text-blue-800">{data.date}</span>
          </div>
        </div>
      </div>
      <div>
        <Markdown>{detail}</Markdown>
      </div>
    </div>
  );
}
