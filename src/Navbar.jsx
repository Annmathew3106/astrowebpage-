
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="topbar">
            <div className="topbar__brand">Astrocet</div>

      <nav className="topbar__menu">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#announcements">Announcements</a>
        <a href="#about">About</a>
      </nav>
        </header>
    );
}
