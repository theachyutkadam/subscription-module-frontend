import React from "react";
import { Sidebar } from "./Common/Sidebar";

export const Dashboard = () => {
  return (

   <>

  <div className="container-scroller">
    <div className="container-fluid page-body-wrapper">

    <Sidebar/>

    <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-sm-12">
              <div className="home-tab">
                <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">Lead</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">Account</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">More</a>
                    </li>
                  </ul>
                  <div>
                    <div className="btn-wrapper">
                      <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share"></i> Share</a>
                      <a href="#" className="btn btn-otline-dark"><i className="icon-printer"></i> Print</a>
                      <a href="#" className="btn btn-primary text-white me-0"><i className="icon-plus"></i> New</a>
                    </div>
                  </div>
                </div>
                <div className="tab-content tab-content-basic">
                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="statistics-details d-flex align-items-center justify-content-between">
                          <div>
                            <p className="statistics-title">Number of sales</p>
                            <h3 className="rate-percentage">2431</h3>
                          </div>
                          <div>
                            <p className="statistics-title">Sales Revenue</p>
                            <h3 className="rate-percentage">$24.403</h3>
                          </div>
                          <div>
                            <p className="statistics-title">Total Products</p>
                            <h3 className="rate-percentage">84234</h3>
                          </div>
                          <div className="d-none d-md-block">
                            <p className="statistics-title">Total Customers</p>
                            <h3 className="rate-percentage">64732</h3>
                          </div>
                          <div className="d-none d-md-block">
                            <p className="statistics-title">Average Price</p>
                            <h3 className="rate-percentage">$2431</h3>
                          </div>
                          <div className="d-none d-md-block">
                            <p className="statistics-title">Total Turnover</p>
                            <h3 className="rate-percentage">$5567</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                  <div>
                                   <h4 className="card-title card-title-dash">Revenue Analytics</h4>
                                  </div>
                                  <div>
                                    <div className="dropdown">
                                      <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> This month </button>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <h6 className="dropdown-header">Settings</h6>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                      </div>
                                     </div>
                                    </div>
                                </div>
                                <div className="chartjs-wrapper mt-4 chart-height-dash">
                                  <canvas id="marketingOverviewCrm"></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                  <div>
                                   <h4 className="card-title card-title-dash">Sales Analytics</h4>
                                  </div>
                                  <div>
                                    <div className="dropdown">
                                      <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> This month </button>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <h6 className="dropdown-header">Weekly</h6>
                                        <a className="dropdown-item" href="#">Monthly</a>
                                        <a className="dropdown-item" href="#">Yearly</a>
                                      </div>
                                     </div>
                                    </div>
                                </div>
                                <div className="chartjs-wrapper mt-4">
                                 <div className="d-lg-flex justify-content-between">
                                  <div>
                                    <canvas className="my-auto" id="doughnutChartCrm" height="170"></canvas>
                                  </div>
                                  <div id="doughnut-chart-legend-crm" className="mt-4 text-center"></div>
                                 </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Sales Trend</h4>
                                  </div>
                                </div>
                                <div className="me-3 mt-4"><div id="sales-trend-legend"></div></div>
                                <div className="chartjs-bar-wrapper mt-3">
                                  <canvas id="salesTrend"></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 className="card-title card-title-dash">Product Overview</h4>
                                  </div>
                                  <div>
                                    <p>13/03/2018 to 20/03/2018</p>
                                  </div>
                                </div>
                                <div className="table-responsive  mt-1">
                                 table
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-flex flex-column">
                        <div className="row flex-grow">
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                      <div>
                                        <h4 className="card-title card-title-dash">Top Performer</h4>
                                      </div>
                                    </div>
                                    <div className="mt-3">
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded" src="../../images/faces/face1.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Isabella Becker</p>
                                            <small className="text-muted mb-0">isabellabacker@gmail.com</small>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded" src="../../images/faces/face2.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Alex Joshi</p>
                                            <small className="text-muted mb-0">alex00123@gmail.com</small>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded" src="../../images/faces/face3.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Catherin Rott</p>
                                            <small className="text-muted mb-0">catherinrott@gmail.com</small>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                          <img className="img-sm rounded" src="../../images/faces/face4.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Selva Dobi</p>
                                            <small className="text-muted mb-0">selvadobi801@gmail.com</small>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="wrapper d-flex align-items-center justify-content-between pt-2">
                                        <div className="d-flex">
                                          <img className="img-sm rounded" src="../../images/faces/face5.jpg" alt="profile" />
                                          <div className="wrapper ms-3">
                                            <p className="ms-1 mb-1 fw-bold">Aman Walt</p>
                                            <small className="text-muted mb-0">amanwalt@gmail.com</small>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 grid-margin stretch-card">
                            <div className="card card-rounded ad-dashboard">
                              <div className="card-body text-center text-white">
                                <div>
                                  <img className="rounded-10 mb-3" src="../../images/dashboard/hand.png" alt="profile" />
                                </div>
                                <h4 className="display-5 font-weight-medium mb-3">Get HModernAdmin 2 Pro  <br /> Mobile App </h4>
                                <p className="mb-3">Download HModernAdmin 2 Pro mobile app. Now available in play store and app store</p>
                                <button className="btn btn-light btn-lg">Download Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>


   </>


  )
}