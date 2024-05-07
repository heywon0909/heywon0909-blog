export default function PostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full flex-col items-center w-full xl:w-2/3 pt-24 p-10">
      {children}
    </div>
  );
}
