import {
  EyeIcon,
  RepoForkedIcon,
  StarIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";

function CountBubble({ count }: { count: number }) {
  return (
    <span className="ml-1 rounded-full bg-gh-neutral-muted px-[6px] py-[1px] text-[11px] font-semibold leading-[18px] text-gh-fg">
      {count}
    </span>
  );
}

function WatchButton({ count }: { count: number }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-xs font-medium text-gh-fg hover:bg-gh-btn-hover-bg"
    >
      <EyeIcon size={16} />
      <span>Watch</span>
      <CountBubble count={count} />
      <TriangleDownIcon size={16} className="text-gh-fg-muted" />
    </button>
  );
}

function SplitDropdownButton({
  icon: Icon,
  label,
  count,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  count: number;
}) {
  return (
    <div className="flex items-stretch">
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-l-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-xs font-medium text-gh-fg hover:bg-gh-btn-hover-bg"
      >
        <Icon size={16} />
        <span>{label}</span>
        <CountBubble count={count} />
      </button>
      <button
        type="button"
        className="-ml-px flex items-center rounded-r-md border border-gh-btn-border bg-gh-btn-bg px-2 text-gh-fg hover:bg-gh-btn-hover-bg"
      >
        <TriangleDownIcon size={16} className="text-gh-fg-muted" />
      </button>
    </div>
  );
}

export default function RepoHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-5">
      <div className="flex items-center gap-3">
        <img
          src="/avatar.jpg"
          alt="Ryfernandes"
          className="h-6 w-6 rounded-full"
        />
        <h1 className="text-[20px] font-semibold leading-tight text-gh-fg">
          personal-website
        </h1>
        <span className="rounded-full border border-gh-border px-[7px] py-[2px] text-xs font-medium leading-none text-gh-fg-muted">
          Public
        </span>
      </div>

      <div className="flex items-center gap-2">
        <WatchButton count={0} />
        <SplitDropdownButton icon={RepoForkedIcon} label="Fork" count={0} />
        <SplitDropdownButton icon={StarIcon} label="Star" count={0} />
      </div>
    </div>
  );
}
