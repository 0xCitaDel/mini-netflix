import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-left">
        <span className="logo">MINIFLIX</span>
        <span className="nav-item">Home</span>
        <span className="nav-item">Series</span>
        <span className="nav-item">Movies</span>
        <span className="nav-item">My List</span>
      </div>
      <div className="navbar-right">
        <div className="avatar" />
      </div>
    </nav>
  );
}
