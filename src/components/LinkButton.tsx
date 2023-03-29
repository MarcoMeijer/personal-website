import Link from "next/link";

export interface LinkButtonProps {
  title?: string;
  href: string;
}

export default function LinkButton({ title, href }: LinkButtonProps) {
  return (
    <div className="hover:animate-bubble">
      <Link
        href={href}
        className="bg-purple-400 m-2 px-8 py-4 rounded-full font-bold text-2xl hover:bg-purple-300"
      >
        {title}
      </Link>
    </div>
  );
}
