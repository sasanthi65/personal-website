import React from "react";
import "./projects.css";
import Works from "./Works";

function Projects() {
  return (
    <section className="work section" id="projects">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most Recent Works</span>
      <Works />
    </section>
  );
}

export default Projects;
