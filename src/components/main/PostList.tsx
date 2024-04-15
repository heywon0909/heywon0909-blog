"use client";
import { TPost } from "@/service/posts";
import Post from "./Post";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
interface Props {
  posts: Array<TPost>;
}
export default function PostList({ posts }: Props) {
  const [data, setData] = useState(() => posts);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full">
      <Carousel responsive={responsive}>
        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Carousel>
    </div>
  );
}
