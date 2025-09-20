import React from "react";
import { useNavigate } from "react-router-dom";
import BaseCard from "../components/BaseCard";
import "../styles/AgencyDetail.css";
import { NAVY } from "../data/navyData";   // ✅ single source

export default function AgencyDetail() {
  const navigate = useNavigate();
  const agency = NAVY;

  return (
    <main className="agency-page">
      {/* HERO */}
      <section
        className="agency-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${agency.backgroundUrl})`,
          width: "100vw",
          height: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label={`${agency.name} hero`}
      >
        <div className="agency-hero-inner text-center text-white">
          <div className="flag-circle mb-2">
            <img src={agency.flagUrl} alt="India flag" className="flag-img" />
          </div>
          <h1 className="agency-name">{agency.name}</h1>
          <p className="agency-slogan">{agency.slogan}</p>
        </div>
      </section>

      {/* BASES */}
      <section className="container py-4">
        <div className="section-header text-center mb-3">
          <h3>OUR BASES</h3>
          <div className="underline" />
        </div>

        <div className="row g-3">
          {agency.bases.map((base) => (
            <div
              key={base.id}
              className="col-6 col-md-4 d-flex justify-content-center"
            >
              <BaseCard
                base={base}
                agencyId={agency.id}
                onOpen={() => navigate(`/bases/${base.id}`)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}