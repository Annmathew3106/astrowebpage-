import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function App() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCycle((current) => current + 1);
    }, 18000);

    return () => clearInterval(intervalId);
  }, []);

  const heroLetters = [
    { char: "A", order: 0 },
    { char: "S", order: 1 },
    { char: "T", order: 2 },
    { char: "R", order: 3 },
    { char: "O", order: 4 },
    { char: "C", order: 5 },
    { char: "E", order: 6 },
    { char: "T", order: 7 },
  ];

  const eventPosts = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    image:
      index === 0
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFKWZoWrJ5PLmFtBwUxp3wNs2l3hKtr-OwQ&s"
        : index === 1
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtO1yvDrs3r_cNd5mU__aSIeTvcnqANb55cA&s"
          : index === 2
            ? "https://astrocet.vercel.app/images/gallery/galleryimg2.JPG"
            : index === 3
              ? "https://astrocet.vercel.app/images/gallery/galleryimg7.JPG"
              : index === 4
                ? "https://tiqr.events/_next/image/?url=https%3A%2F%2Ftiqr-events.sgp1.cdn.digitaloceanspaces.com%2Ftiqr-events%2Fmedia%2Fimages%2Fbd481b5f41be4a1396785ea81f1124fa-astro_photography.png&w=1920&q=75"
                : index === 5
                  ? "https://astrocet.vercel.app/images/pastevents/GBFKoutreach.jpg"
        : "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
  }));

  return (
    <>
      <Navbar />
      <main className="site-main">
        <div className="global-space" aria-hidden="true">
          <div className="global-layer global-stars" />
          <div className="global-layer global-stars global-stars-two" />
          <div className="global-layer global-aurora global-aurora-one" />
          <div className="global-layer global-aurora global-aurora-two" />
        </div>

        <section id="home" className="section hero-section">
          <div className="space-layer stars" />
          <div className="space-layer stars stars-two" />
          <div className="space-layer stars stars-three" />
          <div className="space-layer stars stars-four" />
          <div className="space-layer glitter glitter-one" />
          <div className="space-layer glitter glitter-two" />
          <div className="space-layer aurora aurora-one" />
          <div className="space-layer aurora aurora-two" />
          <div className="space-layer aurora aurora-three" />
          <div className="space-layer constellation constellation-one" />
          <div className="space-layer constellation constellation-two" />
          <div className="space-layer nebula nebula-left" />
          <div className="space-layer nebula nebula-right" />
          <div className="space-layer flashlight flashlight-one" />
          <div className="space-layer flashlight flashlight-two" />
          <div className="space-layer dust-cloud" />
          <div className="space-layer stardust stardust-one" />
          <div className="space-layer stardust stardust-two" />

          <div className="hero-content">
            <p className="hero-kicker">Welcome To</p>
            <h1 key={`astro-cycle-${cycle}`} className="astro-word" aria-label="ASTROCET">
              {heroLetters.map((item, index) => (
                <span
                  key={`${item.char}-${index}`}
                  className={`astro-letter ${item.gap ? "gap" : ""} ${index === 0 ? "first-letter" : ""
                    }`}
                  style={{ "--i": item.order ?? 0 }}
                >
                  {item.gap ? "\u00A0" : item.char}
                </span>
              ))}
            </h1>
            <p key={`subtitle-cycle-${cycle}`} className="hero-subtitle hero-subtitle-reveal">
              COLLEGE OF ENGINEERING TRIVANDRUM
            </p>
            <p key={`about-cycle-${cycle}`} className="hero-about hero-about-reveal">
              AstroCET is the official astronomy club of the College of Engineering
              Trivandrum. Established in 2019 as a hobby initiative, it has evolved
              into a leading technical and outreach community dedicated to space
              science and exploration.
            </p>
          </div>
        </section>

        <section id="events" className="section content-section">
          <h2>Events</h2>
          <p>Latest event posts from Astrocet.</p>
          <div className="events-grid">
            {eventPosts.map((post) => (
              <article key={post.id} className="event-card">
                <img
                  className="event-card__image"
                  src={post.image}
                  alt={`Event post ${post.id}`}
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>

        <section id="announcements" className="section content-section">
          <h2>Announcements</h2>
          <p>Publish quick updates, notices, and important event information.</p>
          <div className="announcement-options">
            <article className="announcement-card">
              <h3>Astro CET Grand Opening</h3>
              <div className="announcement-divider" aria-hidden="true" />
              <p>Join us for the beginning of something amazing.</p>
            </article>
          </div>
        </section>

        <section id="about" className="section content-section">
          <h2>About</h2>
          <div className="about-flow">
            <h3 className="about-subheading">Vision</h3>
            <p>
              AstroCET aims to lead in astronomy education and outreach by
              fostering skill development, curiosity, and innovation that
              inspire students and the wider public to explore the cosmos.
            </p>

            <h3 className="about-subheading">Mission</h3>
            <p>
              AstroCET focuses on igniting a lasting passion for astronomy
              through an inclusive platform for learning, experimentation, and
              exploration.
            </p>

            <h3 className="about-subheading">About AstroCET</h3>
            <p>
              Established in 2019 at the College of Engineering Trivandrum
              (CET), AstroCET has evolved into a premier student-led hub for
              space science. The club blends technical expertise with public
              engagement through projects such as rover development, telescope
              building, and the restoration of The Stardome, Kerala&apos;s first
              planetarium. Through initiatives like Dhruva and a dedicated
              Outreach Module, AstroCET fosters a thriving community devoted to
              exploring the cosmos.
            </p>

            <h3 className="about-subheading">Connect With AstroCET</h3>
            <p>
              <strong>Official Email:</strong>{" "}
              <a href="mailto:astrocet@cet.ac.in">astrocet@cet.ac.in</a>
              <br />
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/astro.cet/" target="_blank" rel="noreferrer">
                @astro.cet
              </a>
              <br />
              <strong>Official Website:</strong>{" "}
              <a href="https://astrocet.vercel.app" target="_blank" rel="noreferrer">
                astrocet.vercel.app
              </a>
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=AstroCET%20College%20of%20Engineering%20Trivandrum"
                target="_blank"
                rel="noreferrer"
              >
                AstroCET - College of Engineering Trivandrum
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
