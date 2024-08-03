import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { Reveal } from "../reveal";
import Link from "next/link";
import { Button } from "../button";
import { useAtom } from "jotai";
import themeAtom from "../../state/theme";

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
          <div className="flex flex-row items-center gap-4">
            <ThemeSwitch />

            <Link
              href="https://drive.google.com/file/d/1v9M4mc-j0p3E0SPeMJKyOqhH1WxtqQG1/view?usp=sharing"
              target="_blank"
            >
              <Button onClick={() => 0}>Resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  return theme === "dark" ? (
    <FaSun
      size={28}
      onClick={() => setTheme("light")}
      className="hover:cursor-pointer"
    />
  ) : (
    <FaMoon
      size={28}
      onClick={() => setTheme("dark")}
      className="hover:cursor-pointer"
    />
  );
};
