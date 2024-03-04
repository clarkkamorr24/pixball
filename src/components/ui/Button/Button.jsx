import { cn } from "@/lib";

export const Button = ({ onClick, label, className, type }) => {
  return (
    <button
      className={cn(
        "flex cursor-pointer rounded-md bg-primary px-3 py-2 text-xs text-white outline-none",
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
