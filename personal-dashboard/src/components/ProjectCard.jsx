export default function ProjectCard({ title, description }) {
  return (
    <div className="card-box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
