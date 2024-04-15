import PostSection from "@/components/main/PostSection";
import Profile from "@/components/main/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      <PostSection />
    </main>
  );
}
