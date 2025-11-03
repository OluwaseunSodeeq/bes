import { useEffect, useState, useRef } from "react";
import styles from "./SummaryOfJobs.module.css";

export default function CardCounter({ num, text }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 1;
          const duration = 1500;
          const increment = Math.ceil(num / (duration / 16));

          const updateCounter = () => {
            start += increment;
            if (start < num) {
              setCount(start);
              requestAnimationFrame(updateCounter);
            } else {
              setCount(num);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [num]);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.eachCard}>
        <h3>{count}+</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
