export default function FilterBar({ activeFilter, onChange }) {
  const filters = ["All", "Web", "ML", "Systems"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === activeFilter ? "btn-primary" : ""}
          onClick={() => onChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
