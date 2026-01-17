export default function ProjectCard({ title, description, tags }) {
  return (
    <div className="project-card1">
      <h1 className=" project-title">{title.charAt(0)}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="project-tags">
            {tag}
          </span>
        ))}
        </div>
    </div>
  );
}
