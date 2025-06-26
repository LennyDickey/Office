import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import LoadingOverlay from "./components/LoadingOverlay";

const App = () => (
  <>
    <LoadingOverlay />
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
