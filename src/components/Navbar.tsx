"use client";

export interface NavbarProps {
  sections: { title: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  return (
    <div className="flex flex-row fixed z-40 w-screen bg-black bg-opacity-50">
      {sections.map(({ title }, i) => (
        <button
          key={i}
          className="text-white p-4"
          onClick={() => {
            document.getElementById(title)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
