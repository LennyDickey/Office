import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  return (
    <section id="about" className="section-padding">
      <div className="about-title space-y-6">
        <TitleHeader title="‧˚₊•┈┈┈┈୨୧ <INTRO/> ୨୧┈┈┈┈•‧₊˚⊹" />
        <div>
          <p className="about-text pt-15" style={{ color: "#ffadd6" }}>
            I’m Lenny Dickey, a software engineer and creative technologist. I
            design and build interactive digital experiences that pair solid
            engineering with a touch of play, always keeping accessibility and
            real-world impact at the forefront. My roots in community work shape
            a development process that listens first, then translates complex
            ideas into intuitive, human-centered products. When I’m not coding,
            I experiment with computational media and interactive art to explore
            how technology can carry memory and foster connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
