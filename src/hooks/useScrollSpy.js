import { useEffect, useState } from "react";

export function useScrollSpy(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join("|");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const elements = ["top", ...key.split("|")]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? null : entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
