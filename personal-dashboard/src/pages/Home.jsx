import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="page">

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className="hero-text">
            <h1>Personal Dashboard</h1>
            <p className="about-text">
              Projects and work organised by category.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="section section--tight">
        <div className="container ">
          <FilterBar
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container grid grid-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
