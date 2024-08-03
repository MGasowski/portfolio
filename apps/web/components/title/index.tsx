import React from "react";
import { Reveal } from "../reveal";

export const Title = ({ text }: { text: string }) => {
  return (
    <Reveal>
      <div className="flex flex-row items-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {text}
        </h1>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          .
        </span>
      </div>
    </Reveal>
  );
};
