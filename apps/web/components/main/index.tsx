import React from "react";
import { Reveal } from "../reveal";
import TypingEffect from "../typingText";
import { Button } from "../button";
const texts = [
  "build web apps",
  "build mobile apps",
  "create e-commerce solutions",
];
const Main = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-screen">
      <div className="w-8/12 flex  mt-20 flex-col">
        <div className="mb-6">
          <Reveal>
            <span className="text-9xl font-bold tracking-wide ">
              Hi! I&apos;m Marcin
              <span className="text-9xl text-primary">.</span>
            </span>
          </Reveal>
        </div>
        <div className="text-5xl font-medium ">
          <Reveal>
            <span className="text-yellow-400"></span> I{" "}
            <TypingEffect texts={texts} speed={100} pauseDuration={1000} />
          </Reveal>
        </div>

        <div className="my-6">
          <Reveal>
            <span className="text-xl font-thin">
              I&apos;m a web and mobile developer with expertise in React and
              React Native. I have worked on a range of projects from small
              business websites to complex enterprise applications. I&apos;m
              passionate about creating robust and user-friendly applications
              that solve real-world problems.
            </span>
          </Reveal>
        </div>

        <Button onClick={() => {}}>Contact me</Button>
      </div>
    </div>
  );
};

export default Main;
