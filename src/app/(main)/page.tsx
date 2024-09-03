import PostEditor from "@/components/posts/editor/PostEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import PostTabs from "@/components/posts/PostTabs";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <PostTabs />
      </div>
      <TrendsSidebar />
    </main>
  );
}
