import Link from "next/link";

export interface LinkButtonProps {
  title?: string;
  href: string;
}

export default function LinkButton({ title, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="bg-purple-400 m-2 px-6 py-3 rounded font-bold text-xl hover:bg-purple-300"
    >
      {title}
    </Link>
  );
}
