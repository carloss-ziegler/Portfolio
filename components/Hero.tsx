import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "theName'sZiegler.tsx",
      "<Developer />",
      "React.js",
      "React Native",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-7 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative object-cover rounded-full h-32 w-32 mx-auto"
        src="https://media-exp1.licdn.com/dms/image/D4D35AQEysBhQ-DkKuQ/profile-framedphoto-shrink_200_200/0/1670559507962?e=1671321600&v=beta&t=hku_GwFN7oST7tl0zuNqn6BQbvGz4582jcdoKI7Wn1k"
        alt=""
      />

      <div className="z-10">
        <h2 className="text-sm uppercase tracking-[15px] text-gray-500 pb-2 animate-pulse">
          Mobile / Web Developer
        </h2>
        <h1 className="text-4xl md:6xl font-semibold px-10">
          <span className="mr-2">
            {text}
            <Cursor cursorColor="#0474BC" />
          </span>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
