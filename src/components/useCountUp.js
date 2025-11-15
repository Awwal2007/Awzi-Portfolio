import { useEffect, useState } from "react";

export default function useCountUp(trigger, max = 100, speed = 40) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;   // Only start when visible

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= max) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [trigger, max, speed]);

  return count;
}
