"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: "d1" | "d2" | "d3";
  immediate?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const delayClass = delay ?? "";
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

type CountUpProps = {
  value: number;
  suffix?: string;
  active: boolean;
};

export function CountUp({ value, suffix = "", active }: CountUpProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <>
      <b>{display}</b>
      {suffix}
    </>
  );
}

export function MetricsCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="num" ref={ref}>
      <CountUp value={value} suffix={suffix} active={active} />
    </div>
  );
}
