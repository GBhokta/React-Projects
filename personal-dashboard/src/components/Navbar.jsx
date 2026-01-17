import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Projects", "About"];

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <div className="nav-brand">Dashboard</div>

        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className={active === link ? "active" : ""}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
