import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Reveal } from "../reveal";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="fixed w-full top-0 z-30 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 shadow-md border-t-2 border-primary">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row items-center gap-4">
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
          <Reveal>
            <Link
              href="https://drive.google.com/file/d/1v9M4mc-j0p3E0SPeMJKyOqhH1WxtqQG1/view?usp=sharing"
              target="_blank"
            >
              <div className="flex space-x-4 border-2 rounded border-primary py-2 px-4 text-primary hover:bg-primary hover:text-black">
                Resume
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </nav>
  );
};
