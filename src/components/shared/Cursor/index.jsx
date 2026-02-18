import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./style.scss";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: "fixed",
          top: 0,
          left: 0,
          height: 32,
          width: 32,
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          translateX: useSpring(cursorX, { damping: 20, stiffness: 1000 }),
          translateY: useSpring(cursorY, { damping: 20, stiffness: 1000 }),
          position: "fixed",
          top: 0,
          left: 0,
          marginLeft: 12,
          marginTop: 12,
          height: 8,
          width: 8,
          borderRadius: "50%",
          backgroundColor: "#00f2ff", // Cyan accent
          boxShadow: "0 0 10px #00f2ff",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default Cursor;
