import {
  ThreeBarsIcon,
  TriangleDownIcon,
  PlusIcon,
  SearchIcon,
  InboxIcon,
} from "@primer/octicons-react";

export default function GitHubHeader() {
  return (
    <div className="flex items-center pb-2 pt-4">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-md border border-gh-border p-[7px] text-gh-fg-muted hover:bg-gh-neutral-muted"
        >
          <ThreeBarsIcon size={16} />
        </button>

        <a href="/">
          <img
            src="/moose_silhouette_logo.svg"
            alt="Home"
            width={32}
            height={32}
          />
        </a>

        <nav className="flex items-center text-sm">
          <a
            href="/"
            className="text-gh-fg hover:underline"
          >
            Ryfernandes
          </a>
          <span className="mx-1.5 text-gh-fg-muted">/</span>
          <a
            href="/"
            className="font-bold text-gh-fg hover:underline"
          >
            personal-website
          </a>
          <TriangleDownIcon
            size={16}
            className="ml-0.5 text-gh-fg-muted"
          />
        </nav>
      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-2">
        {/* Search */}
        <div className="hidden h-8 items-center gap-2 rounded-md border border-gh-border px-3 text-sm text-gh-fg-muted md:flex lg:w-[272px]">
          <SearchIcon size={14} />
          <span className="flex-1">
            Type{" "}
            <kbd className="mx-0.5 inline-block rounded border border-gh-border px-1 text-xs leading-[18px]">
              /
            </kbd>{" "}
            to search
          </span>
        </div>

        <div className="mx-1 hidden h-5 w-px bg-gh-border md:block" />

        {/* Action icons */}
        <div className="flex items-center">
          <button
            type="button"
            className="flex h-8 items-center rounded-l-md border border-gh-btn-border bg-gh-btn-bg px-2 text-gh-fg-muted hover:bg-gh-btn-hover-bg"
          >
            <PlusIcon size={16} />
          </button>
          <button
            type="button"
            className="-ml-px flex h-8 items-center rounded-r-md border border-gh-btn-border bg-gh-btn-bg px-1 text-gh-fg-muted hover:bg-gh-btn-hover-bg"
          >
            <TriangleDownIcon size={16} />
          </button>
        </div>

        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center rounded-md text-gh-fg-muted hover:bg-gh-neutral-muted"
        >
          <InboxIcon size={16} />
        </button>

        {/* User avatar */}
        <button
          type="button"
          className="ml-0.5 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-1 ring-gh-border"
        >
          <img
            src="/frederick.jpeg"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}
