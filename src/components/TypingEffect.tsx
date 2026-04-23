import { useState, useEffect } from 'react';

export default function TypingEffect({ texts, speed = 100, deleteSpeed = 50, pause = 2000 }: {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText.length >= currentText.length) {
          timeout = setTimeout(() => setIsDeleting(true), pause);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, pause]);

  return (
    <span className="text-fire-500 text-glow">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
