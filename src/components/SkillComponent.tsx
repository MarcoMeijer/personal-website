"use client";

import { CSSProperties, useEffect, useState } from "react";

export interface SkillComponentProps {
  percentage: number;
  name: string;
  className?: string;
  style?: CSSProperties;
  delay: number;
  visible: boolean;
}

export default function SkillComponent({
  name,
  percentage,
  className,
  style,
  delay,
  visible,
}: SkillComponentProps) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (visible && displayed < percentage) {
      setTimeout(() => {
        setDisplayed(displayed + 1);
      }, 10 + (displayed === 0 ? 300 + delay * 1000 : 0));
    }
  }, [displayed, percentage, delay, visible]);

  return (
    <div
      className={`flex flex-row items-center m-4 w-full ${className}`}
      style={style}
    >
      <h1 className="text-lg lg:text-2xl w-3/12 font-bold text-gray-200">
        {name}
      </h1>
      <div className="h-6 bg-slate-200 w-9/12 rounded-lg">
        <div
          className="h-6 bg-purple-500 relative rounded-lg text-white pl-2 font-bold transition-all duration-1000"
          style={{ width: `${displayed !== 0 ? percentage : 0}%` }}
        >
          {displayed}%
        </div>
      </div>
    </div>
  );
}
