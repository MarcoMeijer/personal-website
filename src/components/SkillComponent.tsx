"use client";

export interface SkillComponentProps {
  percentage: number;
  name: string;
}

export default function SkillComponent({
  name,
  percentage,
}: SkillComponentProps) {
  return (
    <div className="flex flex-row items-center m-4 w-full">
      <h1 className="text-2xl w-3/12 font-bold text-white">{name}</h1>
      <div className="h-6 bg-slate-200 w-9/12 rounded overflow-hidden">
        <div
          className="h-6 bg-purple-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
