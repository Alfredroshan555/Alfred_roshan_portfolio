import React, { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const stars = [];
    const numStars = 800; // Increased star count for better density

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * width;
        this.size = Math.random() * 1.5; // Varied size
        this.color = `rgba(255, 255, 255, ${Math.random()})`;
      }

      update() {
        this.z -= 1; // Faster speed
        if (this.z <= 0) {
          this.z = width;
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }

      draw() {
        const x = (this.x - width / 2) * (width / this.z);
        const y = (this.y - height / 2) * (width / this.z);

        // Parallax effect based on mouse
        const offsetX = (mouseX - width / 2) * 0.1; // Increased sensitivity
        const offsetY = (mouseY - height / 2) * 0.1;

        const canvasX = x + width / 2 - offsetX;
        const canvasY = y + height / 2 - offsetY;

        const s = this.size * (width / this.z);

        if (canvasX > 0 && canvasX < width && canvasY > 0 && canvasY < height) {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(canvasX, canvasY, s, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    const render = () => {
      ctx.fillStyle = "#050505"; // Deep black background
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default StarField;
