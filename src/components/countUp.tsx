"use client";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  from?: number;
  to?: number;
  duration?: number;
  suffix?: string;
};

export default function CountUp({
  from = 0,
  to = 0,
  duration = 2,
  suffix = "",
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // trigger when 30% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const increment = (to - from) / (duration * 60);
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [start, from, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
