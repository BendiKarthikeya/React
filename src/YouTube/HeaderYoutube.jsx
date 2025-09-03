import React from "react";

const HeaderYoutube = function () {
  return (
    <div className="container-fluid border-bottom bg-white " style={{ height: "100px",marginTop: "-50px"}}>
      <div className="row align-items-center justify-content-between">
        {/* Left: Menu Icon and Logo */}
        <div className="col-auto d-flex align-items-center">
          <span className="me-3 fs-4" role="button">
            &#9776;
          </span>
          <img
            className="youtube-logo"
            style={{ height: "150px", width: "150px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
          />
        </div>

        {/* Center: Search Bar */}
        <div className="col d-flex justify-content-center">
          <div className="input-group" style={{ maxWidth: "500px" }}>
            <input className="form-control" type="text" placeholder="Search" />
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
          <span className="ms-3 fs-5" role="button">
            &#127908;
          </span>
        </div>

        {/* Right: Add Video, Notifications, User Avatar */}
        <div className="col-auto d-flex align-items-center">
          <span className="me-3 fs-4" role="button">
            &#x2795;
          </span>
          <span className="me-3 fs-4" role="button">
            &#128276;
          </span>
          <img
            className="user-avatar rounded-circle"
            style={{ height: "32px", width: "32px" }}
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderYoutube;