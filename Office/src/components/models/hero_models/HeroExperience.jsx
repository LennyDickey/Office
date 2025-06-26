import { OrbitControls, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Room from "./LennysOffice";

import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
      <ambientLight intensity={0.5} color="#ffffff" />
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

      <Suspense fallback={null}>
        <group
          scale={isMobile ? 0.7 : 1}
          //          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Center>
            <Room />
          </Center>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
