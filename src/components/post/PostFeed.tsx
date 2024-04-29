"use client";
import { TPost } from "@/service/posts";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import remarkGfm from "remark-gfm";

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
      <div className="text-white">
        <Markdown
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  language={match[1]}
                  style={a11yDark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {detail}
        </Markdown>
      </div>
    </div>
  );
}
