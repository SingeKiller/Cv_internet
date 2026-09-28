import { useRef } from "react";
import { useInView } from "../hooks/useInView.js";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
