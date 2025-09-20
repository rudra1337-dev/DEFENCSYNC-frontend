import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../styles/MyRequest.css";
import { getRequestById } from "../data/requestMock";

/**
 * RequestDetail - shows a single request in detail.
 * Tries to read from location.state.request first, else falls back to mock lookup by id.
 */
export default function RequestDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const request = state?.request || getRequestById(id);
  if (!request) {
    return (
      <main className="history-page">
        <div className="container py-5">
          <div className="glass-card p-4">
            <h4>Request not found</h4>
            <p className="muted">No request with id "{id}" found.</p>
            <button className="btn btn-outline-light" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="history-page">
      <div className="container py-4">
        <button className="btn btn-link muted mb-3" onClick={() => navigate(-1)}>← Back</button>

        <div className="glass-card p-3 detail-card">
          <div className="d-flex align-items-start gap-3">
            <div className="detail-avatar" />
            <div className="flex-grow-1">
              <h4 className="mb-1">{request.reason}</h4>
              <div className="muted mb-2">
                <strong>To:</strong> {request.to.base} · <strong>Agency:</strong> {request.to.agency}
              </div>
              <div className="muted mb-2">
                <strong>From:</strong> {request.from.base} · {request.from.agency} · <strong>Location:</strong> {request.from.location}
              </div>
              <div className="muted mb-2">
                <strong>Submitted:</strong> {new Date(request.timestamp).toLocaleString()}
              </div>

              <hr className="my-2" />

              <div className="d-flex gap-3 flex-wrap">
                <div>
                  <h6>Weapons</h6>
                  {!request.weapons ? (
                    <div className="muted">None</div>
                  ) : (
                    <ul className="detail-list">
                      {Object.entries(request.weapons).map(([k, v]) => (
                        <li key={k}>{k}: <strong>{v}</strong></li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h6>Vehicles</h6>
                  {!request.vehicles ? (
                    <div className="muted">None</div>
                  ) : (
                    <ul className="detail-list">
                      {Object.entries(request.vehicles).map(([k, v]) => (
                        <li key={k}>{k}: <strong>{v}</strong></li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-3">
                <small className="muted">Request ID: {request.id}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}