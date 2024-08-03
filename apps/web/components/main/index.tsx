import Link from "next/link";
import { Button } from "../button";
import { Reveal } from "../reveal";
import TypingEffect from "../typingText";

const texts = [
  "build web apps",
  "build mobile apps",
  "create e-commerce solutions",
];

const Main = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-screen p-4 sm:p-8">
      <div className="w-full sm:w-8/12 flex mt-10 sm:mt-20 flex-col">
        <div className="mb-4 sm:mb-6">
          <Reveal>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-wide">
              Hi! I&apos;m Marcin
              <span
                className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
              >
                .
              </span>
            </span>
          </Reveal>
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
          <Reveal>
            <span className="text-yellow-400"></span> I{" "}
            <TypingEffect texts={texts} speed={100} pauseDuration={1000} />
          </Reveal>
        </div>
        <div className="my-4 sm:my-6">
          <Reveal>
            <span className="text-base sm:text-lg md:text-xl font-thin">
              I&apos;m a web and mobile developer with expertise in React and
              React Native. I have worked on a range of projects from small
              business websites to complex enterprise applications. I&apos;m
              passionate about creating robust and user-friendly applications
              that solve real-world problems.
            </span>
          </Reveal>
        </div>
        <div className="mt-4 sm:mt-6">
          <Button onClick={() => 0}>
            <Link href={"#contact"}>Contact me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
