import React from "react";
import { Reveal } from "../reveal";
import { Tag } from "../tag";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Title } from "../title";

const techStack = [
  "React",
  "React Native",
  "GraphQL",
  "JavaScript",
  "TypeScript",
  "Expo",
  "Tailwind",
  "Figma",
  "TRPC",
];

export const About = () => {
  return (
    <div className="my-16 sm:my-32 flex items-center flex-col px-4 sm:px-8">
      <div className="w-full sm:w-2/3">
        <Title text="About" />
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex-1 gap-4 flex flex-col">
            <span className="text-justify text-base sm:text-lg">
              Born and raised in Warsaw, Poland, I am a dedicated web and mobile
              developer with a bachelor&apos;s and master&apos;s degree in
              computer science. Currently, I create mobile applications at a
              dynamic software house.
            </span>
            <span className="text-justify text-base sm:text-lg">
              My top skills are in React and React Native, where I build
              scalable and performant apps, collaborating efficiently with
              designers and backend developers. I am a team player who values
              strong relationships and enjoys organizing company events,
              contributing to a positive work environment.
            </span>
            <span className="text-justify text-base sm:text-lg">
              Looking ahead, I aim to expand my knowledge of emerging
              technologies and continue delivering high-quality applications. My
              passion for technology and teamwork drives me to innovate in the
              web and mobile development landscape.
            </span>
          </div>
          <div className="flex flex-col justify-between lg:w-1/3">
            <div>
              <span className=" text-lg font-bold dark:text-primary bg-primary dark:bg-transparent px-2 py-1">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2 justify-start mt-4">
                {techStack.map((tech, index) => (
                  <Tag key={index} text={tech} />
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <span className=" text-lg font-bold dark:text-primary bg-primary dark:bg-transparent px-2 py-1">
                Links
              </span>
              <div className="flex flex-row gap-4 mt-4">
                <Reveal>
                  <Link href="https://github.com/mgasowski" target="_blank">
                    <FaGithub size={28} />
                  </Link>
                </Reveal>
                <Reveal>
                  <Link
                    href="https://www.linkedin.com/in/marcin-gasowski"
                    target="_blank"
                  >
                    <FaLinkedin size={28} />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
