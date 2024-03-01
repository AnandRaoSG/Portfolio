import React from "react";
import "./WorkExperiences.css";
import { WORK_EXPERIENCE } from "../../utiles/data";
import ExperiencesCard from "./ExperiencesCard/ExperiencesCard";


const WorkExperiences = () => {
  return (
    <section className="experience-container">
      <h5>Work Experiences</h5>

      <div className="experience-content">
        {WORK_EXPERIENCE.map((item) => (
          <ExperiencesCard key={item.title} details={item}/>
        ))}
      </div>
    </section>
  );
};

export default WorkExperiences;
