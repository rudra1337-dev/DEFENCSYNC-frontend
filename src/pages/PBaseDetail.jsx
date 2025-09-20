import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";   // ✅ Added
import "../styles/PBaseDetail.css";
import { NAVY } from "../data/navyData";    // ✅ single source

export default function BaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the base inside NAVY.bases
  const base = NAVY.bases.find((b) => b.id === id);

  if (!base) {
    return (
      <main className="base-detail-page container text-center py-5">
        <h2 className="text-danger">Base not found</h2>
        <button
          className="btn btn-outline-info mt-3"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </main>
    );
  }

  const weapons = Object.values(base.weapons || {});
  const vehicles = Object.values(base.vehicles || {});

  return (
    <main className="base-detail-page">
      {/* Intro */}
      <section className="intro-section container py-5 fade-in-up">
        <div className="row g-4 flex-column flex-md-row align-items-start">
          <div className="col-md-6 intro-text">
            <h1 className="base-title">{base.name}</h1>
            <p className="muted mb-1"><strong>ID:</strong> {base.id}</p>
            <p className="muted"><strong>Location:</strong> {base.location}</p>
          </div>
          <div className="col-md-6 intro-photo">
            <div className="photo-frame">
              <img
                src={base.photo}
                alt={base.name}
                className="img-fluid rounded-3 shadow-lg intro-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strength */}
      <section className="container py-4 fade-in-up">
        <h3 className="section-header left">STRENGTH</h3>
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="glass-card strength-card tilt-3d">
              <h5 className="left">Available Soldiers</h5>
              <p className="value">{base.availSoldiers}</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="glass-card strength-card tilt-3d">
              <h5 className="left">Available Medikits</h5>
              <p className="value">{base.availMedikits}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons */}
      <section className="container py-4 fade-in-up">
        <h3 className="section-header left">WEAPONS</h3>
        <div className="row g-4">
          {weapons.map((w) => (
            <div key={w.name} className="col-12 col-md-6 col-lg-4">
              <div className="glass-card weapon-card d-flex justify-content-between align-items-center p-3">
                <div className="card-body text-start flex-grow-1 me-3">
                  <h5>{w.name}</h5>
                  <p className="muted">Available: {w.available}</p>
                </div>
                <img src={w.photo} alt={w.name} className="weapon-img small flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicles */}
      <section className="container py-4 fade-in-up">
        <h3 className="section-header left">VEHICLES</h3>
        <div className="row g-4">
          {vehicles.map((v) => (
            <div key={v.name} className="col-12 col-md-6 col-lg-4">
              <div className="glass-card vehicle-card d-flex justify-content-between align-items-center p-3">
                <div className="card-body text-start flex-grow-1 me-3">
                  <h5>{v.name}</h5>
                  <p className="muted">Available: {v.available}</p>
                </div>
                <img src={v.photo} alt={v.name} className="weapon-img small flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="container text-center py-5 fade-in-up">
        {/* ✏ Edit Button */}
        <Button
          variant="info"
          onClick={() => navigate(`/bases/${base.id}/edit`, { state: { base } })}
          className="me-3"
        >
          ✏ Edit
        </Button>

        {/* Back Button */}
        <button
          className="btn btn-outline-info back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </main>
  );
}