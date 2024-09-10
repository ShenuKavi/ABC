import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function Reservation() {
  const { user } = useContext(AppContext);

  const [branch, setBranch] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState("");
  const [phone, setPhone] = useState("");

  const handleReservation = async (e) => {
    e.preventDefault();

    const newReservation = {
      user_id: user,
      branch: branch,
      time: time,
      pax: pax,
      phone: phone,
    };

    try {
      const response = await axios.post("/reservations", newReservation);
      // reset form
      setBranch("");
      setTime("");
      setPax("");
      setPhone("");
      alert(response.data.message);
    } catch (error) {
      console.error("Request failed: ", error.response?.data || error.message);
      alert(`Request failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div
      id="reservation"
      className="mt-2 py-4 bg-dark bg-opacity-50 text-light"
      style={{
        backgroundImage: `url('/assets/Reservation.jpeg')`, // Ensure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div>
        <h1>Reservation</h1>
      </div>
      <div className="w-50 mx-auto">
        <form onSubmit={handleReservation} className="py-3">
          <div className="d-flex px-5">
            <div className="mb-3 w-50 me-5">
              <label htmlFor="branch" className="form-label w-100 text-start ps-2">
                Branch
              </label>
              <select
                id="branch"
                className="form-select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="">Select branch</option>
                <option value="Colombo">Colombo</option>
                <option value="Galle">Galle</option>
                <option value="Kandy">Kandy</option>
              </select>
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="time" className="form-label w-100 text-start ps-2">
                Time
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex px-5 mt-4">
            <div className="mb-3 w-50 me-5">
              <label className="form-label w-100 text-start ps-2" htmlFor="pax">
                Pax
              </label>
              <input
                type="text"
                className="form-control"
                id="pax"
                value={pax}
                onChange={(e) => setPax(e.target.value)}
              />
            </div>
            <div className="mb-3 w-50">
              <label className="form-label w-100 text-start ps-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-light w-25 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
