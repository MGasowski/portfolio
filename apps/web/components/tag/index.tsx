import React from "react";

export const Tag = ({ text }: { text: string }) => {
  return (
    <span className="bg-gray-600 p-2 rounded-full hover:bg-primary hover:text-black">
      {text}
    </span>
  );
};
