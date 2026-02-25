import { Suspense } from "react";
import { motion } from "motion/react";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import "../styles/components/tech-stack.css";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 text-center">
        <TitleHeader title="‧˚₊•┈┈┈┈୨୧ <PERSONAL/> ୨୧┈┈┈┈•‧₊˚⊹" />
        <div className="tech-grid justify-items-center">
          {techStackIcons.map((icon, index) => (
            <motion.a
              key={icon.name}
              href={icon.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-border tech-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content space-y-4">
                <div className="tech-icon-wrapper overflow-visible">
                  <Suspense fallback={null}>
                    <TechIconCardExperience model={icon} index={index + 1} />
                  </Suspense>
                </div>
                <div className="padding-x w-full text-center space-y-1">
                  <p className="text-white-50 text-lg font-semibold">
                    {icon.name}
                  </p>
                  <p className="text-blue-50 text-sm">{icon.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
