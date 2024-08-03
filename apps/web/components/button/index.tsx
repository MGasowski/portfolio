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
        className="flex space-x-4 border-2 rounded py-2 px-4 bg-primary text-text-dark dark:text-primary dark:hover:bg-primary dark:bg-transparent border-primary  hover:text-black hover:border-background-dark "
      >
        {children}
      </div>
    </Reveal>
  );
};
