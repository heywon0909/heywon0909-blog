import PostList from "@/components/PostList";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      <PostList />
    </main>
  );
}
