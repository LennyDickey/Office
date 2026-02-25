import { useState, useEffect, useMemo, useRef } from "react";
import { Environment, Float, Center, useGLTF, View } from "@react-three/drei";
import * as THREE from "three";

const TechIconCardExperience = ({ model, index = 1 }) => {
  const viewRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scene: gltfScene } = useGLTF(model.modelPath);

  // Clone so each card owns its own Object3D graph — placing the same
  // scene object in multiple Canvases causes a Three.js ownership error.
  const clonedScene = useMemo(() => gltfScene.clone(true), [gltfScene]);

  // Create material once — stable across StrictMode double-effect runs.
  const overrideMat = useMemo(
    () =>
      model.name === "Interactive Developer"
        ? new THREE.MeshStandardMaterial({ color: "white" })
        : null,
    [model.name]
  );

  // Apply override material to the cloned scene.
  useEffect(() => {
    if (!overrideMat) return;
    clonedScene.traverse((child) => {
      if (child.isMesh && child.name === "Object_5") {
        child.material = overrideMat;
      }
    });
  }, [clonedScene, overrideMat]);

  // Dispose in a separate effect so cleanup isn't tied to the apply effect.
  useEffect(() => {
    return () => overrideMat?.dispose();
  }, [overrideMat]);

  // Observe the View's own div (scrolls with page) — not the fixed shared Canvas.
  // When the card leaves the viewport, Float stops animating and stops calling
  // invalidate(), so the shared Canvas idles correctly in frameloop="demand".
  useEffect(() => {
    const el = viewRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <View
      ref={viewRef}
      index={index}
      visible={isVisible}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />
      <Float
        speed={5.5}
        rotationIntensity={0.5}
        floatIntensity={0.9}
        enabled={isVisible}
        autoInvalidate
      >
        <Center>
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={clonedScene} />
          </group>
        </Center>
      </Float>
    </View>
  );
};

export default TechIconCardExperience;
