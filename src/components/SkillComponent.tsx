"use client";

import { CSSProperties } from "react";

export interface SkillComponentProps {
  percentage: number;
  name: string;
  className?: string;
  style?: CSSProperties;
}

export default function SkillComponent({
  name,
  percentage,
  className,
  style,
}: SkillComponentProps) {
  return (
    <div
      className={`flex flex-row items-center m-4 w-full ${className}`}
      style={style}
    >
      <h1 className="text-2xl w-3/12 font-bold text-gray-200">{name}</h1>
      <div className="h-6 bg-slate-200 w-9/12 rounded overflow-hidden">
        <div
          className="h-6 bg-purple-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
