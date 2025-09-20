// src/components/BaseCard.jsx
import React from "react";
import "../styles/AgencyDetail.css";

export default function BaseCard({ base, onOpen }) {
  return (
    <article
      className="base-card d-flex align-items-center justify-content-between glass-card"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      aria-label={`Open details for ${base.name}`}
    >
      <div className="base-info">
        <h5 className="base-name">{base.name}</h5>
        <p className="base-location">{base.location}</p>
      </div>

      <div className="base-photo-wrap">
        <img src={base.photo} alt={`${base.name} photo`} className="base-photo" />
      </div>
    </article>
  );
}