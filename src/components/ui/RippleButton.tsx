import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
}

const styles = {
  primary: {
    base:   "0 2px 4px -1px rgba(249,164,16,0.4)",
    hover:  "0 4px 10px -1px rgba(249,164,16,0.65)",
    tap:    "inset 0 1px 3px rgba(0,0,0,0.18)",
    ripple: "rgba(255,255,255,0.35)",
  },
  outline: {
    base:   "0 2px 4px -1px rgba(0,0,0,0.1)",
    hover:  "0 4px 10px -1px rgba(0,0,0,0.18)",
    tap:    "inset 0 1px 3px rgba(0,0,0,0.1)",
    ripple: "rgba(255,255,255,0.25)",
  },
};

const spring = { type: "spring" as const, stiffness: 400, damping: 10 };

const MotionLink = motion(Link);

const RippleButton = ({
  children,
  onClick,
  href,
  to,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const s = styles[variant];

  const spawnRipple = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    spawnRipple(e);
    setTimeout(() => onClick?.(), 430);
  };

  const rippleNodes = ripples.map((r) => (
    <motion.span
      key={r.id}
      className="absolute rounded-full pointer-events-none"
      style={{ left: r.x, top: r.y, width: 12, height: 12, x: "-50%", y: "-50%", background: s.ripple }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 20, opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  ));

  const motionProps = {
    className: `relative overflow-hidden inline-flex items-center justify-center ${className}`,
    style: { boxShadow: s.base },
    whileHover: { scale: 1.05, boxShadow: s.hover },
    whileTap:   { scale: 0.95, boxShadow: s.tap },
    transition: spring,
  };

  if (to) {
    return (
      <MotionLink to={to} {...motionProps} onClick={spawnRipple}>
        {children}
        {rippleNodes}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} ref={ref as React.RefObject<HTMLAnchorElement>} {...motionProps} onClick={spawnRipple}>
        {children}
        {rippleNodes}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      {...motionProps}
    >
      {children}
      {rippleNodes}
    </motion.button>
  );
};

export default RippleButton;
