import { useEffect, useState } from "react";

export function useInView(ref, { once = true, rootMargin = "0px 0px -8% 0px", threshold = 0.15 } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, once, rootMargin, threshold]);

  return inView;
}
