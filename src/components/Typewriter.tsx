import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number; // ms per character
  pause?: number; // ms pause at end
}

const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 80, pause = 900 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    if (!deleting && subIndex === currentWord.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="mr-2 text-muted-foreground">Import • Export • Logistics •</span>
      <span className="font-semibold text-foreground min-w-[1ch]">
        {words[index % words.length].slice(0, subIndex)}
      </span>
      <span className="ml-1 w-0.5 h-6 bg-foreground animate-typewriter-caret" />
    </span>
  );
};

export default Typewriter;
