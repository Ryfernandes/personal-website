import {
  PinIcon,
  EyeIcon,
  RepoForkedIcon,
  StarIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";

function CounterButton({
  icon: Icon,
  label,
  count,
  primary,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  count: number;
  primary?: boolean;
}) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className={`flex items-center gap-1.5 rounded-l-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-xs font-medium text-gh-fg hover:bg-gh-btn-hover-bg ${
          primary ? "" : ""
        }`}
      >
        <Icon size={16} />
        <span>{label}</span>
        <TriangleDownIcon size={16} className="text-gh-fg-muted" />
      </button>
      <a
        href="#"
        className="-ml-px flex items-center rounded-r-md border border-gh-btn-border bg-gh-btn-bg px-2.5 py-[3px] text-xs font-semibold text-gh-fg hover:bg-gh-btn-hover-bg hover:text-gh-fg-accent"
      >
        {count}
      </a>
    </div>
  );
}

export default function RepoHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-5">
      {/* Left: avatar + name + badge */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-300 ring-1 ring-gh-border">
          <span className="text-xs font-bold text-gray-600">R</span>
        </div>
        <h1 className="text-[20px] font-semibold leading-tight text-gh-fg">
          personal-website
        </h1>
        <span className="rounded-full border border-gh-border px-[7px] py-[2px] text-xs font-medium leading-none text-gh-fg-muted">
          Public
        </span>
      </div>

      {/* Right: action buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[3px] text-xs font-medium text-gh-fg hover:bg-gh-btn-hover-bg"
        >
          <PinIcon size={16} />
          <span>Unpin</span>
        </button>

        <CounterButton icon={EyeIcon} label="Watch" count={0} />
        <CounterButton icon={RepoForkedIcon} label="Fork" count={0} />
        <CounterButton icon={StarIcon} label="Star" count={0} />
      </div>
    </div>
  );
}
