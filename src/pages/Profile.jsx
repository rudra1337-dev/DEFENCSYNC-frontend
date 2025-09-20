import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseCard from "../components/BaseCard";
import "../styles/Profile.css";
import { NAVY } from "../data/navyData";
import { Modal, Button, Form } from "react-bootstrap";

export default function NavyProfile() {
  const navigate = useNavigate();
  const [bases, setBases] = useState(NAVY.bases);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", location: "", photo: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = () => {
    if (!form.name || !form.location || !form.photo) return;
    const newBase = {
      id: `navy-b${bases.length + 1}`,
      name: form.name,
      location: form.location,
      photo: form.photo,
      availSoldiers: 0,
      availMedikits: 0,
      weapons: {},
      vehicles: {},
    };
    setBases([...bases, newBase]);
    setForm({ name: "", location: "", photo: "" });
    setShow(false);
  };

  return (
    <main className="agency-page">
      {/* HERO */}
      <section
        className="agency-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${NAVY.backgroundUrl})`,
          width: "100vw",
          height: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label={`${NAVY.name} hero`}
      >
        <div className="agency-hero-inner text-center text-white">
          <div className="flag-circle mb-2">
            <img src={NAVY.flagUrl} alt="India flag" className="flag-img" />
          </div>
          <h1 className="agency-name">{NAVY.name}</h1>
          <p className="agency-slogan">{NAVY.slogan}</p>
        </div>
      </section>

      {/* BASES */}
      <section className="container py-4">
        <div className="section-header text-center mb-3">
          <h3>OUR BASES</h3>
          <div className="underline" />
        </div>

        <div className="row g-3">
          {/* existing bases */}
          {bases.map((base) => (
            <div
              key={base.id}
              className="col-6 col-md-4 d-flex justify-content-center"
            >
              <BaseCard
                base={base}
                agencyId={NAVY.id}
                onOpen={() => navigate(`/pbases/${base.id}`)}
              />
            </div>
          ))}

          {/* ➕ Add Base Card */}
          <div className="col-6 col-md-4 d-flex justify-content-center">
            <article
              className="base-card glass-card add-card d-flex flex-column align-items-center justify-content-center"
              role="button"
              tabIndex={0}
              onClick={() => setShow(true)}
              onKeyDown={(e) => e.key === "Enter" && setShow(true)}
              aria-label="Add new base"
            >
              <span className="add-icon">＋</span>
              <p className="add-text">Add Base</p>
            </article>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>Add New Base</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Base Name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. New Naval Dock"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City, State"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                name="photo"
                value={form.photo}
                onChange={handleChange}
                placeholder="https://example.com/photo.jpg"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light">
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}