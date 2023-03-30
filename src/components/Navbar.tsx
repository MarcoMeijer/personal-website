"use client";
import { useEffect, useRef, useState } from "react";

export interface NavbarProps {
  sections: { title: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const controlNavbar = () => {
        if (typeof window !== "undefined") {
          if (window.scrollY > lastScrollY.current) {
            setShow(false);
          } else {
            setShow(true);
          }

          lastScrollY.current = window.scrollY;
        }
      };

      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, []);

  return (
    <div
      className={`flex flex-row fixed z-40 w-screen bg-black bg-opacity-50 transition-all duration-300 ${
        show || "-translate-y-64"
      }`}
    >
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
