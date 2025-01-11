import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  buttonWidth: string;
  handleClick: () => void;
}

export default function Button({
  children,
  buttonWidth,
  handleClick,
}: ButtonProps) {
  return (
    <button
      className={`border border-solid px-4 py-2 rounded ${buttonWidth}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
