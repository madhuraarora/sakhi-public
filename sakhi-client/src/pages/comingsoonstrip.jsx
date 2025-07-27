import React, { useState, useEffect, useRef } from "react";
import "../styles/comingsoonstrip.css";

export default function ComingSoonStrip() {
  const containerRef = useRef(null);
  const sampleRef = useRef(null);
  const [repeats, setRepeats] = useState(0);

  const calculateRepeats = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const spanWidth = sampleRef.current.offsetWidth;
    const needed = Math.ceil(containerWidth / spanWidth) + 1;
    setRepeats(needed);
  };

  useEffect(() => {
    calculateRepeats();
    window.addEventListener("resize", calculateRepeats);
    return () => window.removeEventListener("resize", calculateRepeats);
  }, []);

  const items = Array.from({ length: repeats }, (_, i) => i);

  return (
    <div ref={containerRef} className="coming-soon-strip">
      <span ref={sampleRef} className="cs-item measure">COMING SOON</span>
      {items.map((i) => (
        <span key={i} className="cs-item">COMING SOON</span>
      ))}
    </div>
  );
}

