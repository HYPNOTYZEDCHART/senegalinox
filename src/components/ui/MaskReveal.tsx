"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

// Courbe cubique ultra-tendue pour une précision mécanique & chirurgicale
export const MECHANICAL_EASE = [0.16, 1, 0.3, 1] as const;

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "bottom" | "top" | "left" | "right";
}

/**
 * 2. Reveal synchronisé par Clip-Path (Découpage géométrique net)
 * Démarre à inset(...) et s'ouvre avec la courbe cubique chirurgicale [0.16, 1, 0.3, 1]
 */
export function ClipReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  direction = "bottom",
}: ClipRevealProps) {
  const getInitialClip = () => {
    switch (direction) {
      case "bottom":
        return "inset(0% 0% 100% 0%)";
      case "top":
        return "inset(100% 0% 0% 0%)";
      case "left":
        return "inset(0% 0% 0% 100%)";
      case "right":
        return "inset(0% 100% 0% 0%)";
      default:
        return "inset(0% 0% 100% 0%)";
    }
  };

  return (
    <motion.div
      initial={{ clipPath: getInitialClip(), opacity: 0.85 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: MECHANICAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TextMaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Reveal de texte ligne par ligne depuis un conteneur overflow-hidden
 */
export function TextMaskReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: TextMaskRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "115%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: MECHANICAL_EASE,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
