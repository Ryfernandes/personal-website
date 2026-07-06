import {
  GearIcon,
  LinkIcon,
  BookIcon,
  PulseIcon,
  StarIcon,
  EyeIcon,
  RepoForkedIcon,
  PackageIcon,
  RocketIcon,
} from "@primer/octicons-react";

function SectionHeader({
  title,
  action,
  badge,
}: {
  title: string;
  action?: React.ReactNode;
  badge?: number;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-base font-semibold text-gh-fg">
        {title}
        {badge !== undefined && (
          <span className="rounded-full bg-gh-counter-bg px-2 py-0.5 text-xs font-semibold text-gh-fg">
            {badge}
          </span>
        )}
      </h2>
      {action}
    </div>
  );
}

function StatItem({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-sm text-gh-fg-muted hover:text-gh-fg-accent"
    >
      <Icon size={16} />
      <span>{label}</span>
    </a>
  );
}

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* About */}
      <section>
        <SectionHeader
          title="About"
          action={
            <button
              type="button"
              className="rounded p-1 text-gh-fg-muted hover:text-gh-fg-accent"
            >
              <GearIcon size={16} />
            </button>
          }
        />
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-gh-fg-accent hover:underline"
          >
            <LinkIcon size={16} className="shrink-0 text-gh-fg-muted" />
            ryanfernanpage.com
          </a>
          <StatItem icon={BookIcon} label="Readme" />
          <StatItem icon={PulseIcon} label="Activity" />
        </div>
        <div className="mt-3 space-y-1">
          <StatItem icon={StarIcon} label="0 stars" />
          <StatItem icon={EyeIcon} label="0 watching" />
          <StatItem icon={RepoForkedIcon} label="0 forks" />
        </div>
      </section>

      <hr className="border-gh-border-muted" />

      {/* Releases */}
      <section>
        <SectionHeader title="Releases" />
        <p className="text-sm text-gh-fg-muted">No releases published</p>
        <a
          href="#"
          className="mt-1 block text-sm font-semibold text-gh-fg-accent hover:underline"
        >
          Create a new release
        </a>
      </section>

      <hr className="border-gh-border-muted" />

      {/* Deployments */}
      <section>
        <SectionHeader title="Deployments" badge={20} />
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gh-fg-success" />
          <span className="font-semibold text-gh-fg">Production</span>
          <span className="text-gh-fg-muted">11 months ago</span>
        </div>
        <a
          href="#"
          className="mt-2 block text-sm text-gh-fg-accent hover:underline"
        >
          + 19 deployments
        </a>
      </section>

      <hr className="border-gh-border-muted" />

      {/* Packages */}
      <section>
        <SectionHeader title="Packages" />
        <p className="text-sm text-gh-fg-muted">No packages published</p>
      </section>
    </div>
  );
}
