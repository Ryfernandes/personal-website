import GitHubHeader from "@/components/GitHubHeader";
import RepoNav from "@/components/RepoNav";
import RepoHeader from "@/components/RepoHeader";
import FileExplorer from "@/components/FileExplorer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gh-canvas">
      {/* Header + tabs — full width, gray background */}
      <div className="border-b border-gh-border bg-gh-canvas-subtle">
        <div className="px-4">
          <GitHubHeader />
        </div>
        <div className="px-4">
          <RepoNav />
        </div>
      </div>

      {/* Repo header — white background, constrained-width divider */}
      <div className="mx-auto max-w-[1280px] border-b border-gh-border px-4">
        <RepoHeader />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-[1280px] px-4 py-5">
        <div className="flex gap-8">
          <main className="min-w-0 flex-1">
            <FileExplorer />
          </main>
          <aside className="hidden w-[296px] shrink-0 lg:block">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
