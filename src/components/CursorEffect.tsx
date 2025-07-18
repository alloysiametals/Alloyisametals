import { useEffect, useRef } from 'react';

const GlowCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    const speed = 0.15;

    const updatePosition = (x: number, y: number) => {
      mouseX = x;
      mouseY = y;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const touchMoveHandler = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('touchmove', touchMoveHandler, { passive: true });

    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('touchmove', touchMoveHandler);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-12 h-12 border-2 border-yellow-400 rounded-full opacity-40"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-yellow-400 shadow-lg"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default GlowCursor;
