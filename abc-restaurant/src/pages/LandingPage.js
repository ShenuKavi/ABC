import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";
import MenuPage from "./MenuPage";
import About from "./About";
import Service from "./Service";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Reservation from "./Reservation";
import OnlineOrder from "./OnlineOrder";
import AdminMenu from "./AdminMenu";
import AdminReport from "./AdminReport";
import Payment from "./Payment";
import FeedBack from "./FeedBack";

function LandingPage() {
  return (
    <div id="homepage" className="container-fluid m-0 p-0 main-container">
      <div className="bg-dark vh-100 bg-opacity-75">
        {/* Navigation */}
        <div id="navigation" className="w-100 h-10 sticky-top">
          <Navigation />
        </div>

        {/* Home Page */}
        <div id="content" className="h-90 w-100 m-0 row">
          <div id="content" className="col-6 text-white">
            <div className="h-75 d-flex flex-column justify-content-center text-start ps-5">
              <div className="fs-1 fw-bold">Welcome to ABC! <br></br>
                                            For an unforgettable dining experience!</div>
              <div className="text-start fs-4 mt-3">
              This is the place Where great taste meets the perfect blend of great food and warm hospitality...
              </div>
            </div>
            <div className="d-flex justify-content-center ps-5">
              <div className="pe-3 w-50">
                <Link to="/login">
                  <button className="w-100 p-2 rounded fw-semibold btn btn-light">
                    Login
                  </button>
                </Link>
              </div>
              <div className="w-50">
                <Link to="/signup">
                  <button className="w-100 p-2 rounded fw-semibold btn btn-outline-secondary">
                    Signup
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            id="content"
            className="col-6 d-flex justify-content-center align-items-center"
          >
            
          </div>
        </div>

        {/* About */}
        <About />

        {/* Service */}
        <Service />

        {/* Gallery */}
        <Gallery />
        {/* Menu */}
        <MenuPage />

        {/* Reservation */}
        <Reservation />

        {/* OnlineOrder */}
        <OnlineOrder />

        {/* AdminMenu */}
        <AdminMenu />

        {/* AdminReport */}
        <AdminReport />

        {/* Contact */}
        <Contact />

        {/* Payment */}
        <Payment />

        {/* FeedBack */}
        <FeedBack />
      </div>
    </div>
  );
}

export default LandingPage;
