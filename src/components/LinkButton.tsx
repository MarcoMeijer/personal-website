"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PageTransition from "./PageTransition";

export interface LinkButtonProps {
  title?: string;
  href: string;
}

export default function LinkButton({ title, href }: LinkButtonProps) {
  const [transition, setTransition] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="hover:animate-bubble">
        <button
          className="bg-purple-400 m-2 px-8 py-4 rounded-full font-bold text-2xl hover:bg-purple-300"
          onClick={() => {
            if (!transition) {
              setTransition(true);
              setTimeout(() => {
                router.push(href);
              }, 700);
            }
          }}
        >
          {title}
        </button>
      </div>
      {transition && <PageTransition />}
    </>
  );
}
