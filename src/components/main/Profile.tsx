import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-auto h-auto p-2 flex justify-center items-center gap-5">
      <div>
        <h1 className="text-xl text-gray-800 font-semibold">Hello</h1>
        <span className="text-lg text-gray-600">I am heywon0909</span>
      </div>
      <Image
        src={"/blog/images/profile.png"}
        alt="profile"
        width="180"
        height="180"
      />
    </div>
  );
}
