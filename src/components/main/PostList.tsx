"use client";
import { TPost } from "@/service/posts";
import Carousel from "react-multi-carousel";
import Post from "./Post";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
interface Props {
  posts: Array<TPost>;
}
export default function PostList({ posts }: Props) {
  const [data, setData] = useState(() => posts);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
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
