import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllRequest.css";
import { REQUESTS_MOCK } from "../data/requestMock";

export default function AllRequest() {
  const navigate = useNavigate();

  const onOpen = (req) => {
    navigate(`/requests/${req.id}`, { state: { request: req } });
  };

  return (
    <main className="all-req-page py-4">
      <div className="container">
        <header className="page-header text-center mb-4">
          <h2 className="fw-bold text-uppercase text-primary">All Requests</h2>
          <p className="muted small">
            Complete history of all submitted defence requests
          </p>
        </header>

        {/* ✅ Responsive grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="row g-4">
          {REQUESTS_MOCK.map((req) => (
            <div
              key={req.id}
              className="col-12 col-md-6 col-lg-4"
              onClick={() => onOpen(req)}
            >
              <article className="req-card glass-3d h-100 p-4 d-flex flex-column justify-content-between">
                <div className="card-top">
                  <h5 className="reason fw-semibold mb-2">{req.reason}</h5>
                  <p className="meta small text-secondary mb-0">
                    <strong>To:</strong> {req.to.base}
                    <span className="mx-1">•</span>
                    <strong>From:</strong> {req.from.location}
                  </p>
                </div>
                <div className="card-bottom text-end mt-3">
                  <span className="time small">
                    {new Date(req.timestamp).toLocaleString()}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}