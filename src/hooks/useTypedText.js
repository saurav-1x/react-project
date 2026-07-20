import { useEffect, useState } from "react";

export default function useTypedText(words, speed = 100, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
      return undefined;
    }

    const timeout = setTimeout(
      () => setSubIndex((value) => value + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return `${words[index % words.length].slice(0, subIndex)}|`;
}
