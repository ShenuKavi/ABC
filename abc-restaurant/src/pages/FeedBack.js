import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

function FeedBack() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    branch: "",
    rating: "",
    feedback: ""
  });

  const handleChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/feedback", feedbackData)
      .then((response) => {
        console.log("Feedback submitted", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the feedback!", error);
      });
  };

  return (
    <div
      className="h-100"
      style={{
        backgroundImage: `url('/assets/Feedback.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <form className="border-0 rounded-3 bg-dark bg-opacity-75 py-5 w-50 d-flex flex-column align-items-center text-white" onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="text-white">Customer Feedback</h1>
          </div>
          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={feedbackData.name} onChange={handleChange} placeholder="Enter your name" autoComplete="off" />
          </div>
          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={feedbackData.email} onChange={handleChange} placeholder="example@test.com" autoComplete="off" />
          </div>
          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="phoneNumber">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" value={feedbackData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" autoComplete="off" />
          </div>
          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="branch">Select Branch</label>
            <select className="form-select" id="branch" value={feedbackData.branch} onChange={handleChange}>
              <option value="">Select Branch</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Monaragala">Monaragala</option>
            </select>
          </div>
          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="rating">Rating</label>
            <select className="form-select" id="rating" value={feedbackData.rating} onChange={handleChange}>
              <option value="">Select Rating</option>
              <option value="0">0/5</option>
              <option value="1">1/5</option>
              <option value="2">2/5</option>
              <option value="3">3/5</option>
              <option value="4">4/5</option>
              <option value="5">5/5</option>
            </select>
          </div>
          <div className="mb-3 w-50">
            <label className="form-label w-100 text-start ps-2" htmlFor="feedback">Feedback</label>
            <textarea className="form-control" id="feedback" rows="3" value={feedbackData.feedback} onChange={handleChange} placeholder="Enter your feedback" />
          </div>
          <button type="submit" className="btn btn-dark w-50 mt-3">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default FeedBack;
