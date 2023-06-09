export interface ButtonProps {
  title?: string;
  onClick?: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 m-2 px-6 py-3 rounded-full font-bold text-xl bubble"
    >
      {title}
    </button>
  );
}
