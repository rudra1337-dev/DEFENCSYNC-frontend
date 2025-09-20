import React from "react";
import "../styles/Home.css";

export default function AgencyCard({ agency, onClick }) {
  return (
    <div
      className="agency-card glass-card tilt-3d"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter") onClick(); }}
      aria-label={`Open ${agency.name} details`}
      style={{ backgroundImage: `url(${agency.backgroundUrl})` }}
    >
      <div className="card-overlay">
        <div className="small-flag">
          <img src={agency.flagUrl} alt="India flag" />
        </div>

        <div className="card-body">
          <h5 className="agency-title">{agency.name}</h5>
          <p className="agency-short">{agency.short}</p>
        </div>
      </div>
    </div>
  );
}