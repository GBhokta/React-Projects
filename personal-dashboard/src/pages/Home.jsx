import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="page">

      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="hero-text">
            <h1>Personal Dashboard</h1>
            <p className="about-text">
              A clean, structured dashboard built with React and a custom design system.
            </p>
          </div>
        </div>
      </section>
      {/* Project Cards */}
      <section className="container section">
         <h2 className="py-2">Projects</h2>
        <div className="grid grid-2 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
