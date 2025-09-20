import React, { useState } from "react";
import "../styles/AddBaseModal.css";

export default function AddBaseModal({ onClose, onCreate }) {
  const [form, setForm] = useState({ name: "", location: "", photo: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBase = {
      id: `navy-b${Date.now()}`,
      name: form.name,
      location: form.location,
      photo: form.photo,
      availSoldiers: 0,
      availMedikits: 0,
      weapons: {},
      vehicles: {},
    };
    onCreate(newBase);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card glass-3d p-4">
        <h4 className="mb-3 text-center text-light">Create New Base</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Base Name</label>
            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Location</label>
            <input
              className="form-control"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Photo URL</label>
            <input
              className="form-control"
              name="photo"
              value={form.photo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-end gap-2 mt-4">
            <button type="button" className="btn btn-outline-light" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}