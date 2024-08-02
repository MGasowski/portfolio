import React from "react";
import { Reveal } from "../reveal";

export const Button = ({
  children,
  onClick,
}: React.PropsWithChildren & { onClick: () => void }) => {
  return (
    <Reveal>
      <div
        onClick={onClick}
        className="flex space-x-4 border-2 rounded border-primary py-2 px-4 text-primary hover:bg-primary hover:text-black"
      >
        {children}
      </div>
    </Reveal>
  );
};
