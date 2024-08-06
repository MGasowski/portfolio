import { atom } from "jotai";

type Theme = "light" | "dark";

const themeAtom = atom("dark", (get, set, newValue: Theme) => {
  if (newValue === "light") document.documentElement.classList.remove("dark");
  if (newValue === "dark") document.documentElement.classList.add("dark");
  // document.documentElement.setAttribute("data-mode", newValue);
  set(themeAtom, newValue);
});

export default themeAtom;
