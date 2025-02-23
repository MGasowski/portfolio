"use client";

import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import themeAtom from "../../state/theme";
type Ball = {
  id: number;
  color: string;
  size: number;
  xSpeed: number;
  ySpeed: number;
  xPos: number;
  yPos: number;
  xDirection: number;
  yDirection: number;
};
const generateRandomBalls = (numBalls: number) => {
  if (typeof window === "undefined") {
    return []; // Return an empty array when running on the server
  }

  const balls = [];
  for (let i = 0; i < numBalls; i++) {
    balls.push({
      id: i,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      size: Math.random() * 50 + 20,
      xSpeed: Math.random() * 2 + 1,
      ySpeed: Math.random() * 2 + 1,
      xPos: Math.random() * window.innerWidth,
      yPos: Math.random() * window.innerHeight,
      xDirection: Math.random() > 0.5 ? 1 : -1,
      yDirection: Math.random() > 0.5 ? 1 : -1,
    } as Ball);
  }
  return balls;
};

export const BouncingBalls = () => {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    setBalls(generateRandomBalls(15));

    const handleResize = () => setBalls(generateRandomBalls(15));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: ball.color,
            width: ball.size,
            height: ball.size,
            top: ball.yPos,
            left: ball.xPos,
          }}
          animate={{
            x: [0, (window.innerWidth - ball.size) * ball.xDirection],
            y: [0, (window.innerHeight - ball.size) * ball.yDirection],
          }}
          transition={{
            duration: ball.xSpeed * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const Background = ({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={`relative min-h-screen w-full overflow-y-auto ${className}`}
    >
      <BouncingBalls />
      <div className="relative z-10 dark:bg-black bg-white dark:bg-opacity-30 bg-opacity-30 backdrop-blur-lg min-h-screen">
        {children}
      </div>
    </div>
  );
};
