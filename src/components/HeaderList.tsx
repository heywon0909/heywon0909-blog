import Link from "next/link";

export default function HeaderList() {
  return (
    <div className="flex gap-4 text-base font-mono">
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
