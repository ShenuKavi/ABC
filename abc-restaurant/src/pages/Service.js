import React from "react";
import Navigation from "../component/Navigation";

function Service() {
  return (
    <div
      id="service"
      className="d-flex flex-column align-items-center py-4 bg-dark"
    >
      <div className="mb-3">
        <h1 className="text-white">Services</h1>
      </div>
      <div className="row w-100">
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/Reservation.jpg"
                alt="table reservation"
                className="w-25"
              />
            </div>
            <div>
              <a class="nav-link" aria-current="page" href="#home">
                <div className="fs-4">Online Table Reservation</div>
              </a>
              <div className="fw-lighter">
              Book your table online with ease at ABC Restaurant. 
              Choose your preferred date, time, and seating preferences to ensure a seamless dining experience. 
              Perfect for any occasion, our reservation system allows for special requests and quick confirmations.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/delivery.jpeg"
                alt="table reservation"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Food Delivery and Takeaway Orders</div>
              <div className="fw-lighter">
              A service where customers can place online orders for delivery or pickup, 
              with an easy-to-use interface for browsing menus, customizing dishes, 
              and selecting delivery/pickup times.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/promo.png"
                alt="table reservation"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Promotions and Offers</div>
              <div className="fw-lighter">
              Unlock exclusive deals, discounts, and seasonal offers at ABC Restaurant. 
              Stay updated on our latest promotions and enjoy rewards through our loyalty programs—available only on our website.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/hospitality.jpg"
                alt="hospitality"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Hospitality Services</div>
              <div className="fw-lighter">
              Discover our hospitality services at ABC Restaurant, 
              from event hosting and catering to venue rentals for special occasions. 
              Let us make your celebrations unforgettable.
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 py-4 d-flex justify-content-center">
          <div className="bg-white rounded-3 w-75 p-4">
            <div className="mb-4">
              <img
                src="assets/feedback.png"
                alt="customer feedback"
                className="w-25"
              />
            </div>
            <div>
              <div className="fs-4">Customer Support and Queries</div>
              <div className="fw-lighter">
              Have questions or feedback? 
              Reach out to ABC Restaurant through our live chat or 
              contact form for quick assistance and support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
