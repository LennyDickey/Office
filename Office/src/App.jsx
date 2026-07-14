import { Suspense, lazy, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import NavBar from "./components/NavBar";
import LoadingOverlay from "./components/LoadingOverlay";
import WarmPreloader from "./components/WarmPreloader";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack"; // eager

const Experience = lazy(() => import("./sections/Experience"));
const Contact    = lazy(() => import("./sections/Contact"));
const Footer     = lazy(() => import("./sections/Footer"));

const App = () => {
  const rootRef = useRef(null);

  return (
    // Outer wrapper — contains both content and shared canvas so
    // eventSource correctly routes pointer events to this parent.
    <div ref={rootRef} style={{ position: "relative" }}>

      {/* Fixed UI — lifted out of the z:1 stacking context so their own
          z-indices (z-100, z-9999) evaluate at the root level, above canvas. */}
      <LoadingOverlay />
      <NavBar />

      {/* Scrollable page content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <WarmPreloader />
        <Hero />
        <ShowcaseSection />
        <Suspense fallback={null}><Experience /></Suspense>
        <TechStack />
        <Suspense fallback={null}><Contact /></Suspense>
        <Suspense fallback={null}><Footer /></Suspense>
      </div>

      {/* Shared Canvas for tech-card Views.
          z:50 = above content (z:1), below navbar (z:100) and overlay (z:9999).
          Transparent by default — only 3D scissor pixels are visible. */}
      <Canvas
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          pointerEvents: "none",
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5, debounce: 200 }}
        frameloop="demand"
        eventSource={rootRef}
        eventPrefix="client"
      >
        <View.Port />
      </Canvas>

    </div>
  );
};

export default App;
