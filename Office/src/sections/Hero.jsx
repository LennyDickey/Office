import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden h-screen">
      {/* 1) Background layer */}
      <div className="hero-background" />

      {/* 2) Content layer (your existing .hero-layout) */}
      <div className="hero-layout">
        <figure className="hero-3d-layout">
          <HeroExperience />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
