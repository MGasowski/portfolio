"use client";

import { About } from "../components/about";
import { Background } from "../components/background";
import { Contact } from "../components/contact";
import { Experience } from "../components/experience";
import { Header } from "../components/header";
import Main from "../components/main";

export default function Web() {
  return (
    <>
      <Header />
      <Background>
        <Main />
        <About />
        <Experience />
        <Contact />
      </Background>
    </>
  );
}
