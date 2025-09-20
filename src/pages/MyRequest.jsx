import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyRequest.css";
import { fetchRequestHistory } from "../API/api.jsx";

export default function RequestHistory() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const onOpen = (req) => {
    navigate(`/requests/${req._id}`, { state: { request: req } });
  };

  useEffect(() => {
    const getRequests = async () => {
      try {
        const data = await fetchRequestHistory();
        setRequests(data.requests);
      } catch (err) {
        setError(err.message || "Failed to load requests");
      } finally {
        setLoading(false);
      }
    };
    getRequests();
  }, []);

  if (loading) return <p className="text-center py-4">Loading requests...</p>;
  if (error) return <p className="text-center py-4 text-danger">{error}</p>;

  return (
    <main className="history-page">
      <div className="container py-4">
        <div className="page-header d-flex align-items-center justify-content-between mb-3">
          <h3 className="mb-0">Request History</h3>
          <small className="muted">Recent requests</small>
        </div>

        <div className="list-wrap">
          {requests.map((req) => (
            <article
              key={req._id}
              className="history-card d-flex align-items-start gap-3"
              role="button"
              onClick={() => onOpen(req)}
            >
              <div className="card-left">
                <div className="avatar">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#c9f3ff" opacity="0.12" />
                    <path
                      d="M7 12h10M7 16h7M7 8h10"
                      stroke="#b4f0ff"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="card-body flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="title">
                    <div className="reason fw-semibold">{req.reason}</div>
                    <div className="meta muted small">
                      <strong>To:</strong> {req.baseNameTo} &nbsp;•&nbsp;
                      <strong>From:</strong> {req.locationFrom}
                    </div>
                  </div>
                  <div className="time muted small text-end">
                    {new Date(req.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}