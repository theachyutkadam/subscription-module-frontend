import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <div className="me-3">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
            <span className="icon-menu"></span>
          </button>
        </div>
        <div>
        <Link to="/" className="navbar-brand brand-logo"> <img src="images/logo.png" alt="logo" /> </Link>
        <Link to="/" className="navbar-brand brand-logo-mini"> <img src="images/logo-mini.png" alt="logo" /> </Link>
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-top">
        <ul className="navbar-nav">
          <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
            <h1 className="welcome-text">Good Morning, <span className="text-black fw-bold">Pankaj Singh</span></h1>
            <h3 className="welcome-sub-text">Your performance summary this week </h3>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown d-none d-lg-block">
          <Link to="/#" className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split" id="messageDropdown" data-bs-toggle="dropdown" aria-expanded="false"> Select Category </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">

              <Link to="/#" className="dropdown-item py-3">
                <p className="mb-0 font-weight-medium float-left">Select category</p>
              </Link>

              <div className="dropdown-divider"></div>

              <Link to="/#" className="dropdown-item preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis font-weight-medium text-dark">Bootstrap Bundle </p>
                  <p className="fw-light small-text mb-0">This is a Bundle featuring 16 unique dashboards</p>
                </div>
              </Link>

              <Link to="/#" className="dropdown-item preview-item">
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis font-weight-medium text-dark">Angular Bundle</p>
                  <p className="fw-light small-text mb-0">Everything you’ll ever need for your Angular projects</p>
                </div>
                </Link>

            </div>
          </li>
          <li className="nav-item d-none d-lg-block">
            <div id="datepicker-popup" className="input-group date datepicker navbar-date-picker">
              <span className="input-group-addon input-group-prepend border-right">
                <span className="icon-calendar input-group-text calendar-icon"></span>
              </span>
              <input type="text" className="form-control" />
            </div>
          </li>
          <li className="nav-item">
            <form className="search-form" action="#">
              <i className="icon-search"></i>
              <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
            </form>
          </li>

          <li className="nav-item dropdown">
          <Link to="/#" className="nav-link count-indicator" id="countDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="icon-bell"></i>
              <span className="count"></span>
              </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
              <Link to="/#" className="dropdown-item py-3">
                <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                <span className="badge badge-pill badge-primary float-right">View all</span>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="../../images/faces/face10.jpg" alt="image" className="img-sm profile-pic" />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                  <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
              </Link>
              <Link to="/#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="../../images/faces/face12.jpg" alt="image" className="img-sm profile-pic" />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                  <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
                </Link>
                <Link to="/#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="../../images/faces/face1.jpg" alt="image" className="img-sm profile-pic" />
                </div>
                <div className="preview-item-content flex-grow py-2">
                  <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                  <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                </div>
                </Link>
            </div>
          </li>
          <li className="nav-item dropdown d-none d-lg-block user-dropdown">
          <Link to="/#" className="nav-link" id="UserDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img className="img-xs rounded-circle" src="images/faces/face8.jpg" alt="Profile image" /> </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
              <div className="dropdown-header text-center">
                <img className="img-md rounded-circle" src="images/faces/face8.jpg" alt="Profile image" />
                <p className="mb-1 mt-3 font-weight-semibold"> Pankaj Singh </p>
                <p className="fw-light text-muted mb-0">pankaj.singh@gmail.com</p>
              </div>
              <Link to="/#" className="dropdown-item"> <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile <span className="badge badge-pill badge-danger">1</span> </Link>
              <Link to="/#" className="dropdown-item"> <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i> Messages </Link>
              <Link to="/#" className="dropdown-item"> <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity </Link>
              <Link to="/#" className="dropdown-item"> <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i> FAQ </Link>
              <Link to="/#" className="dropdown-item"> <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out </Link>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}