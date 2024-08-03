import React from "react";
import { Reveal } from "../reveal";
import { Tag } from "../tag";
import { Title } from "../title";

const experienceItems = [
  {
    title: "React/React Native Applications Developer",
    company: "Blesu",
    date: "2022 - present",
    location: "Warsaw, Poland",
    description:
      "I oversaw the maintenance and enhancement of infrastructure supporting the data flow from IoT devices, ensuring seamless integration and optimal performance. I utilized Azure cloud tools to bolster the scalability, security, and efficiency of IoT-driven solutions. I developed and optimized solutions primarily using Java, JavaScript, and bash scripts, ensuring robustness and adherence to best practices.",
    tags: [
      "React Native",
      "React",
      "GraphQL",
      "TypeScript",
      "Expo",
      "Tailwind",
      "Figma",
      "TRPC",
    ],
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    date: "June 2021 - August 2022",
    location: "Warsaw, Poland",
    description:
      "I spearheaded the development and deployment of cutting-edge mobile and web applications leveraging React and React Native frameworks. I collaborated closely with cross-functional teams, including designers and backend developers, to ensure a seamless user experience and high-quality application performance. I led the customization and enhancement of existing applications to meet evolving business and user needs. I implemented state-of-the-art UI/UX designs, ensuring responsiveness across a wide range of devices and platforms.",
    tags: ["IoT", "Azure", "CI/CD", "Bash", "JavaScript", "Ansible"],
  },
];

export const Experience = () => {
  return (
    <div className="flex justify-center items-center py-16 sm:py-32">
      <div className="flex flex-col w-full px-4 sm:w-2/3 lg:w-1/2">
        <Title text="Experience" />
        {experienceItems.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

type ExperienceItemProps = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
};

const ExperienceItem = ({
  title,
  company,
  date,
  location,
  description,
  tags,
}: ExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-col sm:flex-row justify-between">
        <Reveal>
          <h2 className="text-lg sm:text-xl font-bold">{company}</h2>
        </Reveal>
        <p className="text-sm sm:text-base">{date}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <Reveal>
          <p
            className="font-medium dark:font-normal text-base sm:text-lg text-text-dark bg-primary dark:text-primary dark:bg-transparent
"
          >
            {title}
          </p>
        </Reveal>
        <p className="text-sm sm:text-base">{location}</p>
      </div>
      <Reveal>
        <p className="text-sm sm:text-base">{description}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </Reveal>
    </div>
  );
};
