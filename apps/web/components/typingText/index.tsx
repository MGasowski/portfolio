// components/TypingEffect.js
import { useState, useEffect, useRef } from "react";

type TypingEffectProps = {
  texts: string[];
  speed: number;
  pauseDuration: number;
};
const TypingEffect = ({ texts, speed, pauseDuration }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // 'typing' | 'erasing' | 'pausing'
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phase === "typing") {
      if (displayedText.length < texts[currentIndex].length) {
        typingRef.current = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + texts[currentIndex][displayedText.length]
          );
        }, speed);
      } else {
        // When typing is complete, start the erasing phase
        setPhase("pausing");
      }
    } else if (phase === "erasing") {
      if (displayedText.length > 0) {
        typingRef.current = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed);
      } else {
        // Move to the next text after erasing is complete
        setPhase("typing");
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else if (phase === "pausing") {
      typingRef.current = setTimeout(() => {
        setPhase("erasing");
      }, pauseDuration);
    }

    return () => clearTimeout(typingRef.current);
  }, [displayedText, phase, currentIndex, texts, speed, pauseDuration]);

  return (
    <span className="w-64">
      <span className="w-64">{displayedText}</span>
    </span>
  );
};

export default TypingEffect;
