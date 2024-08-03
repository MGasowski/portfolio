import React from "react";

export const Tag = ({ text }: { text: string }) => {
  return (
    <span
      className="dark:bg-gray-600 p-2 rounded-full hover:bg-primary hover:text-black text-text-light bg-gray-400 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
    >
      {text}
    </span>
  );
};
