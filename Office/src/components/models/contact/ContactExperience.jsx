import { Float } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";

import Computer from "./Game";

// Drives Float animation in frameloop="demand" mode by calling invalidate()
// only while the canvas element is visible in the viewport.
const FloatDriver = () => {
  const { invalidate, gl } = useThree();
  useEffect(() => {
    let rafId;
    let running = false;
    const step = () => {
      invalidate();
      if (running) rafId = requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) rafId = requestAnimationFrame(step);
        else cancelAnimationFrame(rafId);
      },
      { threshold: 0.1 }
    );
    observer.observe(gl.domElement);
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [invalidate, gl]);
  return null;
};

const ContactExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      frameloop="demand"
    >
      <FloatDriver />
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight position={[5, 9, 1]} intensity={2.5} color="#ffd9b3" />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <group scale={2}>
          <Computer />
        </group>
      </Float>
    </Canvas>
  );
};

export default ContactExperience;
