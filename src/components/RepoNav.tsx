import {
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  PeopleIcon,
  PlayIcon,
  TableIcon,
  BookIcon,
  ShieldLockIcon,
  GraphIcon,
  GearIcon,
} from "@primer/octicons-react";

interface TabItemProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  selected?: boolean;
}

function TabItem({ icon: Icon, label, selected }: TabItemProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-2.5 pb-3 pt-2 text-[14.5px] transition-colors ${
        selected
          ? "border-gh-underline-selected font-semibold text-gh-fg"
          : "border-transparent text-gh-fg/65 hover:border-gh-neutral-muted hover:text-gh-fg"
      }`}
    >
      <Icon size={16} className={selected ? "text-gh-fg" : "text-gh-fg-muted"} />
      <span>{label}</span>
    </a>
  );
}

export default function RepoNav() {
  return (
    <nav className="-mb-px flex items-center gap-0.5 overflow-x-auto">
      <TabItem icon={CodeIcon} label="Code" selected />
      <TabItem icon={IssueOpenedIcon} label="Issues" />
      <TabItem icon={GitPullRequestIcon} label="Pull requests" />
      <TabItem icon={PeopleIcon} label="Agents" />
      <TabItem icon={PlayIcon} label="Actions" />
      <TabItem icon={TableIcon} label="Projects" />
      <TabItem icon={BookIcon} label="Wiki" />
      <TabItem icon={ShieldLockIcon} label="Security and quality" />
      <TabItem icon={GraphIcon} label="Insights" />
      <TabItem icon={GearIcon} label="Settings" />
    </nav>
  );
}
