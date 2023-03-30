"use client";
import { useEffect, useRef } from "react";

export interface OnScrollListenerProps {
  onScroll: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function OnScrollListener({
  onScroll,
  children,
  className,
}: OnScrollListenerProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const called = useRef<boolean>(false);

  useEffect(() => {
    const listener = () => {
      if (ref.current !== null && !called.current) {
        const minPixelsIn = 200;
        const top = ref.current.getBoundingClientRect().top;
        const bottom = ref.current.getBoundingClientRect().bottom;
        if (bottom >= minPixelsIn && top <= window.innerHeight - minPixelsIn) {
          called.current = true;
          onScroll();
        }
      }
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [onScroll]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
