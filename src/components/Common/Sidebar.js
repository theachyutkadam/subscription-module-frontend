import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (

    <div>

    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">

          <li className="nav-item active">
            <Link exact to="/" className="nav-link">
            <i className="mdi mdi-grid-large menu-icon"></i>
            <span className="menu-title">Dashboard</span> </Link>
            </li>

          <li className="nav-item nav-category"> ORDERS </li>

          <li className="nav-item">

            <Link to="/#ui-basic" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
            <i className="menu-icon mdi mdi-floor-plan"></i>
            <span className="menu-title"> Revenue Orders </span>
            <i className="menu-arrow"></i>
            </Link>

            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link to="/revenue" className="nav-link"> Revenue </Link>
                  </li>
              </ul>
            </div>

          </li>

          <li className="nav-item">
          <Link to="/#" className="nav-link">
          <i className="mdi mdi-book menu-icon"></i>
          <span className="menu-title">Payments</span>
           </Link>
          </li>

          <li className="nav-item">
            <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi mdi-face"></i>
              <span className="menu-title">Users</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi-alert-outline"></i>
              <span className="menu-title">Customer Profile</span>
            </Link>
          </li>

          <li className="nav-item">
          <Link to="/#form-elements" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="form-elements">
              <i className="menu-icon mdi mdi-card-text-outline"></i>
              <span className="menu-title">Resources</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link to="/#" className="nav-link">
                    Resources
                  </Link>
                  </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi-settings"></i>
              <span className="menu-title">Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi-email-outline"></i>
              <span className="menu-title">Configuration</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi-file-image-outline"></i>
              <span className="menu-title">Overview</span>
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi-cash"></i>
              <span className="menu-title">Finance</span>
              </Link>
          </li>
          <li className="nav-item nav-category">help</li>
          <li className="nav-item">
          <Link to="/#" className="nav-link">
              <i className="menu-icon mdi mdi-power"></i>
              <span className="menu-title">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
  );
}