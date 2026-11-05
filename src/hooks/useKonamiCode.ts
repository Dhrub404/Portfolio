
"use client";

import { useEffect, useRef } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function useKonamiCode(onUnlock: () => void) {
  const keysRef = useRef<string[]>([]);
  const callbackRef = useRef(onUnlock);

  useEffect(() => {
    callbackRef.current = onUnlock;
  }, [onUnlock]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const pressedKey = e.key;

      if (!pressedKey) return;

      const nextKeys = [...keysRef.current, pressedKey].slice(
        -KONAMI_CODE.length
      );

      keysRef.current = nextKeys;

      const isMatch =
        nextKeys.length === KONAMI_CODE.length &&
        nextKeys.every(
          (key, idx) =>
            typeof key === "string" &&
            key.toLowerCase() === KONAMI_CODE[idx].toLowerCase()
        );

      if (isMatch) {
        callbackRef.current();
        keysRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return keysRef.current;
}
