import { Suspense, lazy } from "react";

import Navbar from "./components/NavBar";
import LoadingOverlay from "./components/LoadingOverlay";
import WarmPreloader from "./components/WarmPreloader";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack"; // eager

const Experience = lazy(() => import("./sections/Experience"));
const Contact    = lazy(() => import("./sections/Contact"));
const Footer     = lazy(() => import("./sections/Footer"));
const App = () => {
  return (
    <>
      <LoadingOverlay />
      <WarmPreloader />
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Suspense fallback={null}><Experience /></Suspense>
      <TechStack />
      <Suspense fallback={null}><Contact /></Suspense>
      <Suspense fallback={null}><Footer /></Suspense>
    </>
  );
};

export default App;
