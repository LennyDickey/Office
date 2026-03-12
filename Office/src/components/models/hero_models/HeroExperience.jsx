import { OrbitControls, Center, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";

import HeroCanvasErrorBoundary from "./HeroCanvasErrorBoundary";
import Room from "./LennysOffice";
import { HERO_MODEL_URL } from "./heroGltfLoader";

const MAX_RETRIES = 1;

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [retryToken, setRetryToken] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const handleHeroError = useCallback(() => {
    setAttempt((currentAttempt) => {
      if (currentAttempt >= MAX_RETRIES) return currentAttempt;

      useGLTF.clear(HERO_MODEL_URL);
      setRetryToken((token) => token + 1);
      return currentAttempt + 1;
    });
  }, []);

  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      
    >

      <hemisphereLight args={["#FFE8D4", "#BB9B8B", 1.05]} />
      <ambientLight intensity={0.62} color="#ffe0c7" />
      <directionalLight
        position={[4, 4, 4]}
        intensity={2.25}
        color="#ffd7be"
      />
      <directionalLight
        position={[-2, 2, 3]}
        intensity={0.98}
        color="#c7d7ff"
      />
      <pointLight
        position={[0.8, 1.9, 1.0]}
        intensity={0.62}
        color="#ffd1bd"
      />

      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={10} // Maximum distance for zooming out
        minDistance={7} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 4} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        minAzimuthAngle={-Math.PI / 1.3}
        maxAzimuthAngle={-Math.PI / 4}
      />

      <HeroCanvasErrorBoundary
        key={retryToken}
        resetToken={retryToken}
        onError={handleHeroError}
        retrying={attempt < MAX_RETRIES}
      >
        <Suspense fallback={null}>
          <group
            scale={isMobile ? 0.7 : 1}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Center>
              <Room />
            </Center>
          </group>
        </Suspense>
      </HeroCanvasErrorBoundary>
    </Canvas>
  );
};

export default HeroExperience;
