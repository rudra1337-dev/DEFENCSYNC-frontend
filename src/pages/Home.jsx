import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgencyCard from "../components/AgencyCard";
import "../styles/Home.css";

const initialAgencies = [
  {
    id: "army",
    name: "ARMY",
    backgroundUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    short: "Indian Army - Protecting the nation on land",
  },
  {
    id: "navy",
    name: "NAVY",
    backgroundUrl:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    short: "Indian Navy - Securing our seas",
  },
  {
    id: "airforce",
    name: "AIRFORCE",
    backgroundUrl:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    short: "Indian Air Force - Dominating the skies",
  },
];

export default function Home() {
  const [agencies] = useState(initialAgencies);
  const [hero] = useState(initialAgencies[0]); // Army by default
  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`/agency/${id}`);
  };

  return (
    <main className="home-page">
      {/* HERO */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${hero.backgroundUrl})` }}
      >
        <div className="hero-overlay">
          <div className="hero-inner">
            <div className="flag-circle" aria-hidden>
              <img src={hero.flagUrl} alt="Flag of India" className="flag-img" />
            </div>
            <h2 className="hero-agency-name">{hero.name}</h2>
            <p className="hero-sub">{hero.short}</p>
          </div>
        </div>
      </section>

      {/* OTHER AGENCIES (cards) */}
      <section className="container py-5">
        <div className="row gx-4 gy-3 justify-content-center">
          {agencies
            .filter((a) => a.id !== hero.id)
            .map((agency) => (
              <div
                key={agency.id}
                className="col-12 col-sm-6 d-flex justify-content-center"
              >
                <AgencyCard agency={agency} onClick={() => onCardClick(agency.id)} />
              </div>
            ))}
        </div>

        {/* NOTES / MOTIVATION */}
        <div className="notes-section mt-5">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="glass-note glow-anim">
                <h4>Important Notes</h4>
                <ul>
                  <li>Maintain secure communication channels at all times.</li>
                  <li>Report any resource shortages immediately via Requests.</li>
                  <li>Follow SOPs for transfers and approvals.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="glass-note gradient-words">
                <h4>Motivation</h4>
                <p>
                  "Duty, Honour, Country — Your commitment keeps our nation safe.
                  Stay brave. Stay ready. Together we are stronger."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}