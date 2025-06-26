import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 text-center">
        <TitleHeader title="‧˚₊•┈┈┈┈୨୧ <PERSONAL/> ୨୧┈┈┈┈•‧₊˚⊹" />
        <div className="tech-grid justify-items-center">
          {techStackIcons.map((icon) => (
            <a
              key={icon.name}
              href={icon.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-border tech-card overflow-hidden group xl:rounded-3xl rounded-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content space-y-4">
                <div className="tech-icon-wrapper overflow-visible">
                  <TechIconCardExperience model={icon} />
                </div>
                <div className="padding-x w-full text-center space-y-1">
                  <p className="text-white-50 text-lg font-semibold">
                    {icon.name}
                  </p>
                  <p className="text-blue-50 text-sm">{icon.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
