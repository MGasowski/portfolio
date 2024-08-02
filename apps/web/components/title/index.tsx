import React from "react";
import { Reveal } from "../reveal";

export const Title = ({ text }: { text: string }) => {
  return (
    <Reveal>
      <div className="flex-row flex mb-8">
        <h1 className="text-7xl font-bold">{text}</h1>
        <span className="text-7xl text-primary">.</span>
      </div>
    </Reveal>
  );
};
