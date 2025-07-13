import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  loop?: boolean;
  delayBetweenWords?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
}

export const useTypewriter = ({
  words,
  loop = true,
  delayBetweenWords = 2000,
  typeSpeed = 100,
  deleteSpeed = 50,
}: UseTypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Delete characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => 
            loop ? (prevIndex + 1) % words.length : Math.min(prevIndex + 1, words.length - 1)
          );
        }
      } else {
        // Type characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText.length === currentWord.length - 1) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, loop, delayBetweenWords, typeSpeed, deleteSpeed, isTyping]);

  return {
    text: currentText,
    isTyping,
    setIsTyping,
  };
};