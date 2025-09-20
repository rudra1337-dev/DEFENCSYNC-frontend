import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../styles/EditBaseDetails.css";

export default function BaseEdit() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const baseData = state?.base;

  const [info, setInfo] = useState({
    name: baseData?.name || "",
    location: baseData?.location || "",
    agency: baseData?.agency || "",
    photo: baseData?.photo || "",
  });

  const [strength, setStrength] = useState({
    soldiers: baseData?.availSoldiers || 0,
    medikits: baseData?.availMedikits || 0,
  });

  const [weapons, setWeapons] = useState(
    Object.values(baseData?.weapons || {})
  );
  const [vehicles, setVehicles] = useState(
    Object.values(baseData?.vehicles || {})
  );

  const addWeapon = () =>
    setWeapons([...weapons, { name: "", available: 0, photo: "" }]);
  const addVehicle = () =>
    setVehicles([...vehicles, { name: "", available: 0, photo: "" }]);

  const updateWeapon = (i, field, val) => {
    const copy = [...weapons];
    copy[i][field] = val;
    setWeapons(copy);
  };
  const updateVehicle = (i, field, val) => {
    const copy = [...vehicles];
    copy[i][field] = val;
    setVehicles(copy);
  };

  const onSave = () => {
    const payload = {
      ...baseData,
      ...info,
      availSoldiers: strength.soldiers,
      availMedikits: strength.medikits,
      weapons,
      vehicles,
    };
    console.log("SAVE PAYLOAD", payload);
    // TODO: send payload to API if needed
    navigate(-1);
  };

  return (
    <main className="edit-page">
      <div className="container py-4">
        <header className="page-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">✏ Edit Base Details</h2>
          <small className="muted">ID: {baseData?.id}</small>
        </header>

        {/* INFO */}
        <SectionCard title="Info">
          <Form.Group className="mb-3">
            <Form.Label className="label-title">Base Name</Form.Label>
            <Form.Control
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label-title">Location</Form.Label>
            <Form.Control
              value={info.location}
              onChange={(e) => setInfo({ ...info, location: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label-title">Agency</Form.Label>
            <Form.Control
              value={info.agency}
              onChange={(e) => setInfo({ ...info, agency: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label-title">Photo URL</Form.Label>
            <Form.Control
              value={info.photo}
              onChange={(e) => setInfo({ ...info, photo: e.target.value })}
            />
          </Form.Group>
        </SectionCard>

        {/* STRENGTH */}
        <SectionCard title="Strength">
          <Form.Group className="mb-3">
            <Form.Label className="label-title">Available Soldiers</Form.Label>
            <Form.Control
              type="number"
              value={strength.soldiers}
              onChange={(e) =>
                setStrength({ ...strength, soldiers: +e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label-title">Available Medikits</Form.Label>
            <Form.Control
              type="number"
              value={strength.medikits}
              onChange={(e) =>
                setStrength({ ...strength, medikits: +e.target.value })
              }
            />
          </Form.Group>
        </SectionCard>

        {/* WEAPONS */}
        <SectionCard title="Weapons">
          {weapons.map((w, i) => (
            <div key={i} className="row g-2 align-items-center mb-2">
              <div className="col-5">
                <Form.Control
                  placeholder="Weapon Name"
                  value={w.name}
                  onChange={(e) => updateWeapon(i, "name", e.target.value)}
                />
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder="Available"
                  value={w.available}
                  onChange={(e) =>
                    updateWeapon(i, "available", +e.target.value)
                  }
                />
              </div>
              <div className="col-4">
                <Form.Control
                  placeholder="Photo URL"
                  value={w.photo || ""}
                  onChange={(e) => updateWeapon(i, "photo", e.target.value)}
                />
              </div>
            </div>
          ))}
          <Button
            variant="outline-info"
            className="mt-2"
            onClick={addWeapon}
          >
            ➕ Add Weapon
          </Button>
        </SectionCard>

        {/* VEHICLES */}
        <SectionCard title="Vehicles">
          {vehicles.map((v, i) => (
            <div key={i} className="row g-2 align-items-center mb-2">
              <div className="col-5">
                <Form.Control
                  placeholder="Vehicle Name"
                  value={v.name}
                  onChange={(e) => updateVehicle(i, "name", e.target.value)}
                />
              </div>
              <div className="col-3">
                <Form.Control
                  type="number"
                  placeholder="Available"
                  value={v.available}
                  onChange={(e) =>
                    updateVehicle(i, "available", +e.target.value)
                  }
                />
              </div>
              <div className="col-4">
                <Form.Control
                  placeholder="Photo URL"
                  value={v.photo || ""}
                  onChange={(e) => updateVehicle(i, "photo", e.target.value)}
                />
              </div>
            </div>
          ))}
          <Button
            variant="outline-info"
            className="mt-2"
            onClick={addVehicle}
          >
            ➕ Add Vehicle
          </Button>
        </SectionCard>

        {/* ACTION BUTTONS */}
        <div className="text-center mt-4">
          <Button variant="success" className="me-3 btn-submit" onClick={onSave}>
            💾 Save
          </Button>
          <Button variant="outline-light" onClick={() => navigate(-1)}>
            ✖ Cancel
          </Button>
        </div>
      </div>
    </main>
  );
}

/* Collapsible Section Card */
function SectionCard({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`glass-card clickable-card mb-4 ${open ? "open" : ""}`}
    >
      <div
        className="card-top d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
      >
        <div className="card-title">{title}</div>
        <div className="chev">{open ? "▲" : "▼"}</div>
      </div>
      {/* stopPropagation here so form inputs can be focused */}
      {open && (
        <div
          className="card-expand"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}