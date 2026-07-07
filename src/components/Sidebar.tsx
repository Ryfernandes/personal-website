import {
  LinkIcon,
  BookIcon,
  PulseIcon,
  StarIcon,
  EyeIcon,
  RepoForkedIcon,
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

const languages = [
  { name: "Python", percent: 60, color: "#3572A5" },
  { name: "TypeScript", percent: 20, color: "#3178c6" },
  { name: "C++", percent: 20, color: "#f34b7d" },
];

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* About */}
      <section>
        <SectionHeader title="About" />
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
          className="mt-1 block text-xs text-gh-fg-accent underline hover:no-underline"
        >
          Create a new release
        </a>
      </section>

      <hr className="border-gh-border-muted" />

      {/* Packages */}
      <section>
        <SectionHeader title="Packages" />
        <p className="text-sm text-gh-fg-muted">No packages published</p>
        <a
          href="#"
          className="mt-1 block text-xs text-gh-fg-accent underline hover:no-underline"
        >
          Publish your first package
        </a>
      </section>

      <hr className="border-gh-border-muted" />

      {/* Contributors */}
      <section>
        <SectionHeader title="Contributors" badge={1} />
        <a href="#" className="inline-block">
          <img
            src="/avatar.jpg"
            alt="Ryfernandes"
            className="h-8 w-8 rounded-full hover:opacity-80"
          />
        </a>
      </section>

      <hr className="border-gh-border-muted" />

      {/* Languages */}
      <section>
        <SectionHeader title="Languages" />
        <div className="mb-3 flex h-2 overflow-hidden rounded-full">
          {languages.map((lang) => (
            <div
              key={lang.name}
              style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5 text-xs">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span className="font-semibold text-gh-fg">{lang.name}</span>
              <span className="text-gh-fg-muted">{lang.percent.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
