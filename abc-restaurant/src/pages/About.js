import React from "react";


function About() {
  return (
    <div id="about" className="pt-3 pb-5 w-100">
      <div className="fs-1 fw-bold pb-3">
        <h1>About Us</h1>
      </div>
      <div className="d-flex w-100 justify-content-center ps-5">
        <div className="p-2 rounded text-start">
          <h2>Welcome to ABC Restaurant!</h2>
          <div className="lh-lg">
          ABC Restaurant is your go-to destination for exceptional dining across Sri Lanka, with locations 
          in Colombo, Kandy, and Galle. 
          We take pride in offering a menu that blends authentic flavors 
          with creative dishes, all served in a welcoming atmosphere.
          Whether you're here for a casual meal, a family gathering, or a special event, 
          our warm hospitality and attention to detail will ensure a memorable visit.
          Visit us at any of our branches and savor the taste of ABC. 
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column align-items-end">
            <img src="assets/Aboutus2.jpg" alt="about-image-1" className="w-75" />
          </div>
          <div className="d-flex flex-column align-items-start justify-content-end">
            <img src="assets/Aboutus2.jpg" alt="about-image-2" className="w-75" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;