import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/RequestForm.css";
import { INDIAN_WEAPONS, INDIAN_VEHICLES } from "../data/indianInventory";

import { submitRequest } from "../API/api.jsx";




export default function RequestForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const passedBase = state?.base || null;
  const passedAgency = state?.agency || null;

  // collapsible states
  const [toOpen, setToOpen] = useState(false);
  const [fromOpen, setFromOpen] = useState(false);
  const [weaponsOpen, setWeaponsOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);

  // form fields
  const [toBase, setToBase] = useState(passedBase?.name ?? "");
  const [toAgency, setToAgency] = useState(passedAgency?.name ?? "");
  const [fromBase, setFromBase] = useState(passedBase?.name ?? "");
  const [fromAgency, setFromAgency] = useState(passedAgency?.name ?? "");
  const [fromLocation, setFromLocation] = useState("");
  const [reason, setReason] = useState("The enemy is attacking, come help...");

  // default inventory lists
  const initialWeapons = useMemo(
    () => INDIAN_WEAPONS.map((n) => ({ key: n, name: n, value: 0 })),
    []
  );
  const initialVehicles = useMemo(
    () => INDIAN_VEHICLES.map((n) => ({ key: n, name: n, value: 0 })),
    []
  );
  const [weapons, setWeapons] = useState(initialWeapons);
  const [vehicles, setVehicles] = useState(initialVehicles);

  const [errors, setErrors] = useState({});

  const updateWeaponValue = (key, val) =>
    setWeapons((prev) =>
      prev.map((w) => (w.key === key ? { ...w, value: val } : w))
    );
  const updateVehicleValue = (key, val) =>
    setVehicles((prev) =>
      prev.map((v) => (v.key === key ? { ...v, value: val } : v))
    );

  const clearForm = () => {
    setToBase(passedBase?.name ?? "");
    setToAgency(passedAgency?.name ?? "");
    setFromBase(passedBase?.name ?? "");
    setFromAgency(passedAgency?.name ?? "");
    setFromLocation("");
    setReason("The enemy is attacking, come help...");
    setWeapons(initialWeapons.map((w) => ({ ...w, value: 0 })));
    setVehicles(initialVehicles.map((v) => ({ ...v, value: 0 })));
    setErrors({});
  };

  const validate = () => {
    const e = {};
    if (!toBase.trim()) e.toBase = "To: Base is required";
    if (!toAgency.trim()) e.toAgency = "To: Agency is required";
    if (!fromBase.trim()) e.fromBase = "From: Base is required";
    if (!fromAgency.trim()) e.fromAgency = "From: Agency is required";
    if (!fromLocation.trim()) e.fromLocation = "From: Location is required";
    if (!reason.trim()) e.reason = "Reason is required";

    const numCheck = (val) =>
      val === "" || isNaN(val) || !Number.isInteger(+val) || +val < 0;
    weapons.forEach((w) => {
      if (numCheck(w.value))
        e[`weapon-${w.key}`] = "Whole number ≥ 0 required";
    });
    vehicles.forEach((v) => {
      if (numCheck(v.value))
        e[`vehicle-${v.key}`] = "Whole number ≥ 0 required";
    });

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildPayload = () => {
    const payload = {
      to: { base: toBase.trim(), agency: toAgency.trim() },
      from: {
        base: fromBase.trim(),
        agency: fromAgency.trim(),
        location: fromLocation.trim(),
      },
      reason: reason.trim(),
      timestamp: new Date().toISOString(),
    };
    const w = {};
    weapons.forEach((x) => +x.value > 0 && (w[x.key] = +x.value));
    const v = {};
    vehicles.forEach((x) => +x.value > 0 && (v[x.key] = +x.value));
    if (Object.keys(w).length) payload.weapons = w;
    if (Object.keys(v).length) payload.vehicles = v;
    return payload;
  };

  const onSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const payload = buildPayload();

  try {
    const data = await submitRequest(payload);
    console.log("Request submitted successfully:", data);
    alert("Request submitted ✅");
    navigate(-1); // go back
  } catch (err) {
    console.error("Error submitting request:", err);
    alert(`Error: ${err.error || err.message || "Unknown error"}`);
  }
};

  // stopPropagation helper to keep inputs editable
  const stopClick = (e) => e.stopPropagation();

  return (
    <main className="request-page">
      <form onSubmit={onSubmit} className="container py-5">
        <h2 className="section-title mb-4">Request Form</h2>

        <div className="row g-3">
          {/* TO */}
          <div className="col-12 col-md-6">
            <div
              className={`glass-card clickable-card ${toOpen ? "open" : ""}`}
              onClick={() => setToOpen((s) => !s)}
            >
              <div className="card-top d-flex justify-content-between align-items-center">
                <div className="card-title">To</div>
                <div className="chev">{toOpen ? "▲" : "▼"}</div>
              </div>
              {toOpen && (
                <div className="card-expand" onClick={stopClick}>
                  <input
                    type="text"
                    className={`form-control mb-2 ${
                      errors.toBase ? "is-invalid" : ""
                    }`}
                    placeholder="Base Name"
                    value={toBase}
                    onChange={(e) => setToBase(e.target.value)}
                  />
                  {errors.toBase && (
                    <div className="invalid-feedback">{errors.toBase}</div>
                  )}
                  <input
                    type="text"
                    className={`form-control ${
                      errors.toAgency ? "is-invalid" : ""
                    }`}
                    placeholder="Agency Name"
                    value={toAgency}
                    onChange={(e) => setToAgency(e.target.value)}
                  />
                  {errors.toAgency && (
                    <div className="invalid-feedback">{errors.toAgency}</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* FROM */}
          <div className="col-12 col-md-6">
            <div
              className={`glass-card clickable-card ${fromOpen ? "open" : ""}`}
              onClick={() => setFromOpen((s) => !s)}
            >
              <div className="card-top d-flex justify-content-between align-items-center">
                <div className="card-title">From</div>
                <div className="chev">{fromOpen ? "▲" : "▼"}</div>
              </div>
              {fromOpen && (
                <div className="card-expand" onClick={stopClick}>
                  <input
                    type="text"
                    className={`form-control mb-2 ${
                      errors.fromBase ? "is-invalid" : ""
                    }`}
                    placeholder="Base Name"
                    value={fromBase}
                    onChange={(e) => setFromBase(e.target.value)}
                  />
                  {errors.fromBase && (
                    <div className="invalid-feedback">{errors.fromBase}</div>
                  )}
                  <input
                    type="text"
                    className={`form-control mb-2 ${
                      errors.fromAgency ? "is-invalid" : ""
                    }`}
                    placeholder="Agency Name"
                    value={fromAgency}
                    onChange={(e) => setFromAgency(e.target.value)}
                  />
                  {errors.fromAgency && (
                    <div className="invalid-feedback">{errors.fromAgency}</div>
                  )}
                  <input
                    type="text"
                    className={`form-control ${
                      errors.fromLocation ? "is-invalid" : ""
                    }`}
                    placeholder="Location (Sector / City)"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                  />
                  {errors.fromLocation && (
                    <div className="invalid-feedback">{errors.fromLocation}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reason */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="glass-card">
              <label className="label-title">Reason</label>
              <textarea
                className={`form-control ${errors.reason ? "is-invalid" : ""}`}
                rows="2"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
              {errors.reason && (
                <div className="invalid-feedback">{errors.reason}</div>
              )}
            </div>
          </div>
        </div>

        {/* Weapons & Vehicles */}
        <div className="row mt-4 g-3">
          <div className="col-12">
            <h4 className="section-subtitle">What you need</h4>
          </div>

          {/* Weapons */}
          <div className="col-12 col-md-6">
            <div
              className={`glass-card clickable-card ${weaponsOpen ? "open" : ""}`}
              onClick={() => setWeaponsOpen((s) => !s)}
            >
              <div className="card-top d-flex justify-content-between align-items-center">
                <div className="card-title">Weapons</div>
                <div className="chev">{weaponsOpen ? "▲" : "▼"}</div>
              </div>
              {weaponsOpen && (
                <div
                  className="card-expand scroll-area"
                  onClick={stopClick}
                >
                  {weapons.map((w) => (
                    <div key={w.key} className="d-flex align-items-center mb-2">
                      <div className="flex-grow-1 small">{w.name}</div>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        className={`form-control w-auto ${
                          errors[`weapon-${w.key}`] ? "is-invalid" : ""
                        }`}
                        value={w.value}
                        placeholder="Units"
                        onChange={(e) =>
                          updateWeaponValue(
                            w.key,
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                      />
                      {errors[`weapon-${w.key}`] && (
                        <div className="invalid-feedback">
                          {errors[`weapon-${w.key}`]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Vehicles */}
          <div className="col-12 col-md-6">
            <div
              className={`glass-card clickable-card ${vehiclesOpen ? "open" : ""}`}
              onClick={() => setVehiclesOpen((s) => !s)}
            >
              <div className="card-top d-flex justify-content-between align-items-center">
                <div className="card-title">Vehicles</div>
                <div className="chev">{vehiclesOpen ? "▲" : "▼"}</div>
              </div>
              {vehiclesOpen && (
                <div
                  className="card-expand scroll-area"
                  onClick={stopClick}
                >
                  {vehicles.map((v) => (
                    <div key={v.key} className="d-flex align-items-center mb-2">
                      <div className="flex-grow-1 small">{v.name}</div>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        className={`form-control w-auto ${
                          errors[`vehicle-${v.key}`] ? "is-invalid" : ""
                        }`}
                        value={v.value}
                        placeholder="Units"
                        onChange={(e) =>
                          updateVehicleValue(
                            v.key,
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                      />
                      {errors[`vehicle-${v.key}`] && (
                        <div className="invalid-feedback">
                          {errors[`vehicle-${v.key}`]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="row mt-4">
          <div className="col-12 d-flex gap-2 justify-content-center justify-content-md-start">
            <button type="submit" className="btn btn-info btn-submit">
              Submit Request
            </button>
            <button type="button" className="btn btn-outline-light" onClick={clearForm}>
              Clear
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}