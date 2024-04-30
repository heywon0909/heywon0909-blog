"use client";
import { useRouter } from "next/navigation";
import HeaderList from "./HeaderList";

export default function Header() {
  const router = useRouter();
  const handleMain = () => router.push("/", { scroll: false });

  return (
    <header className="absolute top-0 w-full h-20 flex items-center p-2 justify-center cursor-pointer">
      <div className="w-5/6 flex justify-around">
        <h1
          className="font-bold text-2xl text-purple-200 hover:text-white"
          onClick={handleMain}
        >
          heywon0909
        </h1>
        <HeaderList />
      </div>
    </header>
  );
}
