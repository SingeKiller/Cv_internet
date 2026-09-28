import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion.js";

export function useCountUp(target, start, duration = 1400) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof target !== "number") return undefined;
    if (reduced) {
      setValue(target);
      return undefined;
    }
    if (!start) return undefined;

    let frame = 0;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, reduced]);

  return value;
}
