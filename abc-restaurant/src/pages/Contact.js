import React from "react";


function Contact() {
  return (
    <div id="contact" className="bg-dark text-white py-5">
      <div className="pb-3 text-start ps-5">
        <h1>Contact</h1>
      </div>
      <div className="d-flex">
        <div className="w-50 text-start ps-5">
          <div className="mb-1">ABC Restaurant Colombo</div>
          <div className="mb-1">No. 107/A, Baseline Road, Colombo 9</div>
          <div className="mb-1">Tel: 0112-920-500</div>
          <div className="mb-1">Email: abcrestaurantcmb@abc.lk</div>
        </div>
        <div className="w-50 text-start ps-5">
          <div className="mb-1">ABC Restaurant Galle</div>
          <div className="mb-1">No. 264/H, TS Road, Galle</div>
          <div className="mb-1">Tel: 0112-236-569</div>
          <div className="mb-1">Email: abcrestaurantgall@abc.lk</div>
        </div>
        <div className="w-50 text-start ps-5">
          <div className="mb-1">ABC Restaurant Kandy</div>
          <div className="mb-1">No. 10, Queens Road, Kandy</div>
          <div className="mb-1">Tel: 0112-236-569</div>
          <div className="mb-1">Email: abcrestaurantknd@abc.lk</div>
        </div>
        <div className="w-50 d-flex justify-content-center align-items-end">
          <div>&copy; All Right Reserved 2024 ABC Restaurant</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
