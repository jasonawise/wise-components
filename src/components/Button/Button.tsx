import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      className="border border-solid px-4 py-2 rounded"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
