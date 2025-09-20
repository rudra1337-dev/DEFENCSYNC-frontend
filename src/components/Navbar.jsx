import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import profilePic from "../assets/profile.jpg"; // Profile image
import brandLogo from "../assets/logo.jpg"; // 👈 Add your brand logo here

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* Brand Image instead of text */}
          <Link className="navbar-brand brand" to="/">
            <img 
              src={brandLogo} 
              alt="Brand Logo" 
              className="brand-logo" 
              style={{ height: "40px" }} // Adjust size as needed
            />
          </Link>

          {/* 🔹 Offcanvas toggler - only visible on small devices */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🔹 Offcanvas Menu - for small screens */}
          <div
            className="offcanvas offcanvas-end text-bg-dark d-lg-none"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/request-form">RequestForm</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/my-requests">MyRequest</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/all-requests">AllRequests</Link></li>
                <li className="nav-item">
                  <Link to="/profile" className="profile-link">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 🔹 Normal Navbar links - only visible on large screens */}
          <div className="d-none d-lg-flex nav-links align-items-center">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/request-form">RequestForm</Link>
            <Link className="nav-link" to="/my-requests">MyRequest</Link>
            <Link className="nav-link" to="/all-requests">AllRequests</Link>
            
            {/* ✅ Profile pic as round image */}
            <Link to="/profile" className="profile-link">
              <img src={profilePic} alt="Profile" className="profile-pic" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;