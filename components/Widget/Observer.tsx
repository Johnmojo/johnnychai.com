import dynamic from "next/dynamic";
import { useRef, useEffect, useState, ReactNode } from "react";

interface Props {
  onload: ReactNode;
}

const Observer = ({ onload }: Props) => {
  const targetRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(targetRef.current);
  });

  return (
    <div
      ref={targetRef}
      className={`transition-all duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {onload}
    </div>
  );
};

export default Observer;
