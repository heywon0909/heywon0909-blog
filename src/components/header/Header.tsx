"use client";
import { useRouter } from "next/navigation";
import HeaderList from "./HeaderList";

export default function Header() {
  const router = useRouter();
  const handleMain = () => router.push("/", { scroll: false });

  return (
    <header className="w-full h-20 flex items-center p-2 justify-center bg-white cursor-pointer">
      <div className="w-5/6 flex justify-around">
        <h1 className="font-semibold text-2xl" onClick={handleMain}>
          heywon0909
        </h1>
        <HeaderList />
      </div>
    </header>
  );
}
