import React from "react";
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
import ConfettiRow from "./ConfettiRow";

interface FileRowProps {
  type: "dir" | "file";
  name: string;
  message: string;
  date: string;
}

function FileRow({ type, name, message, date }: FileRowProps) {
  const href = name === "resume.pdf" ? "/resume" : "#";
  return (
    <div className="group flex items-center border-t border-gh-border-muted px-4 py-[10px] hover:bg-gh-canvas-subtle">
      <div className="flex w-[180px] shrink-0 items-center gap-2 pr-2">
        {type === "dir" ? (
          <FileDirectoryFillIcon size={16} className="shrink-0 text-gh-dir-fill" />
        ) : (
          <FileIcon size={16} className="shrink-0 text-gh-file-icon" />
        )}
        <a
          href={href}
          className="truncate text-sm font-medium text-gh-fg hover:text-gh-fg-accent hover:underline"
        >
          {name}
        </a>
      </div>
      <div className="min-w-0 flex-1 overflow-hidden pr-4">
        <a
          href={href}
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
    { type: "dir", name: "projects", message: "Coming soon!", date: "12 hours ago" },
    { type: "dir", name: "src", message: "Remaking GitHub...", date: "1 day ago" },
    { type: "file", name: "README.md", message: "Some short words about me", date: "1 day ago" },
    { type: "file", name: "resume.pdf", message: "Fresh off the press! Read it here!", date: "1 day ago" },
  ];

  return (
    <div>
      {/* Branch / action bar */}
      <div className="mb-4 mt-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: branch, branches count, tags */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[5px] text-sm font-medium text-gh-fg hover:bg-gh-btn-hover-bg"
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
            className="flex w-[240px] items-center gap-1.5 rounded-md border border-gh-btn-border bg-white px-3 py-[5px] text-sm text-gh-fg shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)] hover:bg-gh-btn-hover-bg"
          >
            <SearchIcon size={16} className="text-gh-fg-muted" />
            <span>Go to file</span>
            <kbd className="ml-auto rounded border border-gh-border px-1 text-xs text-gh-fg-muted">
              T
            </kbd>
          </button>

          <button
            type="button"
            className="flex items-center gap-1 rounded-md border border-gh-btn-border bg-gh-btn-bg px-3 py-[5px] text-sm text-gh-fg hover:bg-gh-btn-hover-bg"
          >
            <span>Add file</span>
            <TriangleDownIcon size={16} className="text-gh-fg-muted" />
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-[#1b7f37] bg-[#21883E] px-3 py-[5px] text-sm font-medium text-white hover:bg-gh-btn-primary-hover-bg"
          >
            <CodeIcon size={16} />
            <span>Code</span>
            <TriangleDownIcon size={16} />
          </button>
        </div>
      </div>

      {/* File list container */}
      <div className="overflow-hidden rounded-md border border-gh-border">
        {/* Latest commit bar */}
        <div className="flex items-center justify-between bg-gh-canvas-subtle px-4 py-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <img
              src="/avatar.jpg"
              alt="Ryfernandes"
              className="h-5 w-5 shrink-0 rounded-full"
            />
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
              Remaking GitHub...
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
            <span>1 day ago</span>
            <a
              href="#"
              className="ml-2 flex items-center gap-1 text-gh-fg-muted hover:text-gh-fg-accent"
            >
              <HistoryIcon size={16} />
              <span className="text-xs font-medium text-gh-fg">22 Commits</span>
            </a>
          </div>
        </div>

        {/* File rows */}
        {files.map((file, i) => (
          <React.Fragment key={file.name}>
            <FileRow {...file} />
            {i === 2 && (
              <ConfettiRow message="A bit of personality" date="8 hours ago" />
            )}
          </React.Fragment>
        ))}

      </div>

      {/* README section */}
      <div className="mt-4 rounded-md border border-gh-border">
        <div className="border-b border-gh-border px-4">
          <div className="-mb-px flex items-center justify-between">
            <div className="flex items-center gap-2 border-b-2 border-gh-underline-selected py-3.5">
              <BookIcon size={16} className="text-gh-fg-muted" />
              <h2 className="text-sm font-semibold">README</h2>
            </div>
            <div className="flex items-center gap-2 py-3.5">
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
        </div>

        {/* README content */}
        <div className="px-10 py-8 text-sm leading-relaxed text-gh-fg">
          <h1 className="mb-4 border-b border-gh-border pb-2 text-[2em] font-semibold">
            Ryan Fernandes
          </h1>

          <p className="mb-4">
            Welcome to <strong>RyanHub</strong>! Easily mistaken for its digital
            doppelganger, GitHub, I have recently created RyanHub as a place to
            practice my skills, be creative, and show off my work. There
            isn&apos;t much here at the moment aside from the skeleton, but
            expect plenty of features and easter eggs to come soon.
          </p>

          <p className="mb-4">
            I&apos;m a Computer Science and Electrical Engineering student at{" "}
            <strong>Yale University</strong>{" "}with a 4.0 GPA. I&apos;m
            passionate about AI/ML engineering, open-source software, and
            building things that make an impact.
          </p>

          <p className="mb-6">
            <a href="mailto:ryan@fernandes.us" className="text-gh-fg-accent hover:underline">ryan@fernandes.us</a>
            {" · "}
            <a href="https://github.com/Ryfernandes" className="text-gh-fg-accent hover:underline">GitHub</a>
            {" · "}
            <a href="https://www.linkedin.com/in/ryan-fernandes-088109284/" className="text-gh-fg-accent hover:underline">LinkedIn</a>
            {" · "}
            <a href="/resume" className="text-gh-fg-accent hover:underline">Resume</a>
          </p>

          <h2 className="mb-4 mt-6 border-b border-gh-border pb-2 text-[1.5em] font-semibold">
            Experience
          </h2>

          <h3 className="text-base font-semibold">
            Neural Magic — AI Engineering Intern, vLLM
          </h3>
          <p className="mb-2 text-gh-fg-muted">May 2026 – Present · Boston, MA</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Implementing router-weighted expert pruning compression for large MoE LLMs, reducing VRAM usage up to 50%</li>
            <li>Building an agent-assisted Kubernetes pipeline to automate multi-day LLM evaluation workflows</li>
            <li>Contributing to vLLM&apos;s Speculative Decoding and LLM Compressor repositories (82k stars)</li>
          </ul>

          <h3 className="text-base font-semibold">
            Red Hat, IBM — Software Engineering Intern
          </h3>
          <p className="mb-2 text-gh-fg-muted">May 2025 – August 2025 · Boston, MA</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Created an agentic Docling document editor, yielding a 91% time save on data postprocessing</li>
            <li>Facilitating open-source acquisition by the Docling GitHub organization (35k stars)</li>
            <li>Reduced token costs and latency by 400% through prompt caching and context compression</li>
          </ul>

          <h2 className="mb-4 mt-6 border-b border-gh-border pb-2 text-[1.5em] font-semibold">
            Projects
          </h2>

          <h3 className="text-base font-semibold">Yale Computer Society</h3>
          <p className="mb-2 text-gh-fg-muted">Co-President, Team Lead of y/labs · Sept 2024 – May 2026</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Ran Yale&apos;s largest CS organization — 300 members, 20,000+ users across 7 products</li>
            <li>Drove $19,000 in corporate sponsorships (9.5x increase), managed a $30,000 budget</li>
            <li>Created y/labs, an automated research discovery platform connecting 500+ students and professors</li>
          </ul>

          <h3 className="text-base font-semibold">Robotic Die Rotator</h3>
          <p className="mb-2 text-gh-fg-muted">April 2026 – Present</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Built an autonomous Arduino system to rotate a playing die to any specified orientation</li>
            <li>Wrote a C++ computer vision algorithm with 98% accuracy on a custom 200-image dataset</li>
            <li>Incorporating into a full assembly line to create pixelated murals from 5,000+ dice</li>
          </ul>

          <h2 className="mb-4 mt-6 border-b border-gh-border pb-2 text-[1.5em] font-semibold">
            Skills
          </h2>
          <p>
            Python · PyTorch · NumPy · Pandas · Machine Learning · LLM Optimization · Agentic Applications · MCP · Fullstack Web Development · React/TypeScript · Kubernetes · C/C++ · MATLAB · Solidworks · Git
          </p>
        </div>
      </div>
    </div>
  );
}
