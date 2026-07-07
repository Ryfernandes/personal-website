export default function ResumePage() {
  return (
    <div className="h-screen w-screen">
      <iframe
        src="/resume.pdf"
        className="h-full w-full border-none"
        title="Ryan Fernandes - Resume"
      />
    </div>
  );
}
