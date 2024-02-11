import { cn } from "@/libs/utils";
import { FC } from "react";

interface ButtonProps {
  type: "button" | "submit";
  label: string;
  className?: string;
}
const Button: FC<ButtonProps> = ({ type, label, className }) => {
  return (
    <button
      type={type}
      className={cn(
        "py-2 px-4 bg-red-600 text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:border-red-600 hover:text-red-600 transition-colors duration-300",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
