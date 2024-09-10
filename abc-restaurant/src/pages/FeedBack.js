import React from "react";

function FeedBack() {
  return (
    <div
      className="h-100"
      style={{
        backgroundImage: `url('/assets/Feedback.jpg')`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <form className="border-0 rounded-3 bg-dark bg-opacity-75 py-5 w-50 d-flex flex-column align-items-center text-white">
          <div className="mb-4">
            <h1 className="text-white">Customer Feedback</h1>
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerName"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerEmail"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="customerEmail"
              placeholder="example@test.com"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerPhoneNumber"
            >
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="customerPhoneNumber"
              placeholder="Enter your phone number"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 w-50">
            <label
              htmlFor="branchSelect"
              className="form-label w-100 text-start ps-2"
            >
              Select Branch
            </label>
            <select
              className="form-select"
              id="branchSelect"
              aria-label="Select Branch"
            >
              <option value="" selected>
                Select Branch
              </option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Monaragala">Monaragala</option>
            </select>
          </div>
          <div className="mb-3 w-50">
            <label
              htmlFor="ratingSelect"
              className="form-label w-100 text-start ps-2"
            >
              Rating
            </label>
            <select
              className="form-select"
              id="ratingSelect"
              aria-label="Rating"
            >
              <option value="" selected>
                Select Rating
              </option>
              <option value="0">0/5</option>
              <option value="1">1/5</option>
              <option value="2">2/5</option>
              <option value="3">3/5</option>
              <option value="4">4/5</option>
              <option value="5">5/5</option>
            </select>
          </div>
          <div className="mb-3 w-50">
            <label
              className="form-label w-100 text-start ps-2"
              htmlFor="customerFeedback"
            >
              Feedback
            </label>
            <textarea
              className="form-control"
              id="customerFeedback"
              rows="3"
              placeholder="Enter your feedback"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-dark w-50 mt-3">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedBack;
