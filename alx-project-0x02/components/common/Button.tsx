import React, { type FC } from "react";
import { type ButtonProps } from "../../interfaces";

const sizeClasses: Record<string, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<string, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} ${shapeClass} bg-blue-600 text-white hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;
