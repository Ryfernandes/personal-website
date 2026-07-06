import {
  GitBranchIcon,
  TagIcon,
  SearchIcon,
  TriangleDownIcon,
  CodeIcon,
  HistoryIcon,
  CheckIcon,
  FileDirectoryFillIcon,
  FileIcon,
  BookIcon,
  PencilIcon,
  ListUnorderedIcon,
} from "@primer/octicons-react";

interface FileRowProps {
  type: "dir" | "file";
  name: string;
  message: string;
  date: string;
}

function FileRow({ type, name, message, date }: FileRowProps) {
  return (
    <div className="group flex items-center border-t border-gh-border-muted px-4 py-[7px] hover:bg-gh-canvas-subtle">
      <div className="flex w-[180px] shrink-0 items-center gap-2 pr-2">
        {type === "dir" ? (
          <FileDirectoryFillIcon size={16} className="shrink-0 text-gh-dir-fill" />
        ) : (
          <FileIcon size={16} className="shrink-0 text-gh-file-icon" />
        )}
        <a
          href="#"
          className="truncate text-sm text-gh-fg-accent hover:underline"
        >
          {name}
        </a>
      </div>
      <div className="min-w-0 flex-1 overflow-hidden pr-4">
        <a
          href="#"
          className="block truncate text-sm text-gh-fg-muted hover:text-gh-fg-accent hover:underline"
        >
          {message}
        </a>
      </div>
      <div className="shrink-0 whitespace-nowrap text-right text-sm text-gh-fg-muted">
        {date}
      </div>
    </div>
  );
}

export default function FileExplorer() {
  const files: FileRowProps[] = [
    { type: "dir", name: "public", message: "Updated Resume 8-26", date: "11 months ago" },
    { type: "dir", name: "src", message: "Updated link for document conversion pipeline", date: "last year" },
    { type: "file", name: ".gitignore", message: "The beginning: justinbieber", date: "last year" },
    { type: "file", name: "README.md", message: "The beginning: justinbieber", date: "last year" },
    { type: "file", name: "next.config.ts", message: "Vibe coded gallery component w/ title + simple test imple...", date: "last year" },
    { type: "file", name: "package-lock.json", message: "Simplified the gallery page and added start of home page", date: "last year" },
    { type: "file", name: "package.json", message: "Simplified the gallery page and added start of home page", date: "last year" },
    { type: "file", name: "tsconfig.json", message: "The beginning: justinbieber", date: "last year" },
  ];

  return (
    <div>
      {/* Branch / action bar */}
      <div className="mb-4 mt-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: branch, branches count, tags */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-sm font-medium text-gh-fg hover:bg-gh-btn-hover-bg"
          >
            <GitBranchIcon size={16} className="text-gh-fg-muted" />
            <span>main</span>
            <TriangleDownIcon size={16} className="text-gh-fg-muted" />
          </button>

          <a
            href="#"
            className="flex items-center gap-1 text-sm text-gh-fg-muted hover:text-gh-fg-accent"
          >
            <GitBranchIcon size={16} />
            <span>
              <strong className="text-gh-fg">1</strong> Branch
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-1 text-sm text-gh-fg-muted hover:text-gh-fg-accent"
          >
            <TagIcon size={16} />
            <span>
              <strong className="text-gh-fg">0</strong> Tags
            </span>
          </a>
        </div>

        {/* Right: go to file, add file, code button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-sm text-gh-fg hover:bg-gh-btn-hover-bg"
          >
            <SearchIcon size={16} className="text-gh-fg-muted" />
            <span>Go to file</span>
            <kbd className="ml-1 rounded border border-gh-border px-1 text-xs text-gh-fg-muted">
              T
            </kbd>
          </button>

          <button
            type="button"
            className="flex items-center gap-1 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-sm text-gh-fg hover:bg-gh-btn-hover-bg"
          >
            <span>Add file</span>
            <TriangleDownIcon size={16} className="text-gh-fg-muted" />
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-[#1b7f37] bg-gh-btn-primary-bg px-3 py-[3px] text-sm font-medium text-white hover:bg-gh-btn-primary-hover-bg"
          >
            <CodeIcon size={16} />
            <span>&lt;&gt; Code</span>
            <TriangleDownIcon size={16} />
          </button>
        </div>
      </div>

      {/* File list container */}
      <div className="overflow-hidden rounded-md border border-gh-border">
        {/* Latest commit bar */}
        <div className="flex items-center justify-between bg-gh-canvas-subtle px-4 py-[10px]">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-300">
              <span className="text-[8px] font-bold text-gray-600">R</span>
            </div>
            <a
              href="#"
              className="shrink-0 text-sm font-semibold text-gh-fg hover:text-gh-fg-accent hover:underline"
            >
              Ryfernandes
            </a>
            <a
              href="#"
              className="truncate text-sm text-gh-fg hover:text-gh-fg-accent hover:underline"
            >
              Updated Resume 8-26
            </a>
            <CheckIcon
              size={16}
              className="shrink-0 text-gh-fg-success"
            />
          </div>

          <div className="ml-4 flex shrink-0 items-center gap-2 text-sm text-gh-fg-muted">
            <a
              href="#"
              className="font-mono text-xs text-gh-fg-muted hover:text-gh-fg-accent hover:underline"
            >
              21cb674
            </a>
            <span>·</span>
            <span>11 months ago</span>
            <a
              href="#"
              className="ml-2 flex items-center gap-1 text-gh-fg-muted hover:text-gh-fg-accent"
            >
              <HistoryIcon size={16} />
              <strong className="text-gh-fg">22</strong> Commits
            </a>
          </div>
        </div>

        {/* File rows */}
        {files.map((file) => (
          <FileRow key={file.name} {...file} />
        ))}

        {/* README section */}
        <div className="border-t border-gh-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <BookIcon size={16} className="text-gh-fg-muted" />
              <h2 className="text-sm font-semibold">README</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded p-1 text-gh-fg-muted hover:bg-gh-neutral-muted hover:text-gh-fg-accent"
              >
                <PencilIcon size={16} />
              </button>
              <button
                type="button"
                className="rounded p-1 text-gh-fg-muted hover:bg-gh-neutral-muted hover:text-gh-fg-accent"
              >
                <ListUnorderedIcon size={16} />
              </button>
            </div>
          </div>

          <div className="border-t-2 border-gh-underline-selected" />

          {/* README content */}
          <div className="px-10 py-8">
            <p className="text-sm leading-relaxed text-gh-fg">
              This is a{" "}
              <a href="#" className="font-semibold text-gh-fg-accent hover:underline">
                Next.js
              </a>{" "}
              project bootstrapped with{" "}
              <a href="#" className="text-gh-fg-accent hover:underline">
                <code className="rounded bg-gh-neutral-muted px-1.5 py-0.5 text-sm">
                  create-next-app
                </code>
              </a>
              .
            </p>

            <h2 className="mb-4 mt-6 border-b border-gh-border pb-2 text-2xl font-semibold">
              Getting Started
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gh-fg">
              First, run the development server:
            </p>
            <pre className="mb-4 overflow-x-auto rounded-md bg-gh-canvas-subtle p-4 text-sm leading-relaxed">
              <code className="font-gh-mono text-gh-fg">npm run dev</code>
            </pre>
            <p className="text-sm leading-relaxed text-gh-fg">
              Open{" "}
              <a href="#" className="text-gh-fg-accent hover:underline">
                http://localhost:3000
              </a>{" "}
              with your browser to see the result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
