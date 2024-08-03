import React from "react";
import { Title } from "../title";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="flex w-full justify-center h-[700px] pt-64" id="contact">
      <div className="w-2/3 items-center flex flex-col">
        <div className="w-full flex justify-center">
          <Title text="Contact" />
        </div>
        <div className="w-2/3 justify-center text-center">
          Feel free to reach out to me via email at{" "}
          <Link href={"mailto:marcin@digitalgoose.pl"}>
            <span className="dark:text-primary text-text-dark bg-primary dark:bg-transparent">
              marcin@digitalgoose.pl{" "}
            </span>
          </Link>
          or connect with me on{" "}
          <Link
            href={"https://www.linkedin.com/in/marcin-gasowski"}
            target="_blank"
          >
            <span className="dark:text-primary text-text-dark bg-primary dark:bg-transparent">
              Linkedin
            </span>
          </Link>
          . I look forward to connecting with you!
        </div>
      </div>
    </div>
  );
};
