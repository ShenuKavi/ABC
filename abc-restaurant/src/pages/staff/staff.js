import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Contact from "../Contact";

function Staff() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getReservations();
    getOrders();
  }, []);

  const handleLogout = () => {
    setUser("");
    navigate("/");
  };

  const getReservations = async () => {
    try {
      const response = await axios.get("/reservations");
      setReservations(response.data);
      console.log("Reservations fetched:", response.data); // Debugging: Log reservations
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  const getOrders = async () => {
    try {
      const response = await axios.get("/orders");
      setOrders(response.data);
      console.log("Orders fetched:", response.data); // Debugging: Log orders
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Function to accept a reservation
  const handleAcceptReservation = async (id) => {
    console.log("Accept reservation clicked, ID:", id); // Debugging: Log ID
    try {
      const response = await axios.post(`/reservations/${id}/accept`);
      console.log("Reservation accepted:", response.data); // Debugging: Log response
      getReservations(); // Refresh reservations after action
    } catch (error) {
      console.error("Error accepting reservation:", error);
    }
  };

  // Function to cancel a reservation
  const handleCancelReservation = async (id) => {
    console.log("Cancel reservation clicked, ID:", id); // Debugging: Log ID
    try {
      const response = await axios.post(`/reservations/${id}/cancel`);
      console.log("Reservation canceled:", response.data); // Debugging: Log response
      getReservations(); // Refresh reservations after action
    } catch (error) {
      console.error("Error canceling reservation:", error);
    }
  };

  // Function to accept an order
  const handleAcceptOrder = async (id) => {
    console.log("Accept order clicked, ID:", id); // Debugging: Log ID
    try {
      const response = await axios.post(`/orders/${id}/accept`);
      console.log("Order accepted:", response.data); // Debugging: Log response
      getOrders(); // Refresh orders after action
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  };

  // Function to cancel an order
  const handleCancelOrder = async (id) => {
    console.log("Cancel order clicked, ID:", id); // Debugging: Log ID
    try {
      const response = await axios.post(`/orders/${id}/cancel`);
      console.log("Order canceled:", response.data); // Debugging: Log response
      getOrders(); // Refresh orders after action
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/assets/staff.jpeg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures it covers the full height
      }}
    >
      <div id="staff-header">
        <div className="px-5 py-2 d-flex justify-content-between bg-dark bg-opacity-25">
          <div>
            <img src="assets/Logoo.png" alt="website-logo" className="w-20" />
          </div>
          <div className="d-flex align-items-center">
            <div className="me-3">{user}</div>
            <div>
              <button onClick={handleLogout} className="btn btn-outline-dark">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation management */}
      <div id="reservation-management" className="py-4 bg-dark bg-opacity-75 text-light">
        <div>
          <h1 className="mb-3">Reservation</h1>
          <div className="h-100">
            <table className="w-75 mt-2 mx-auto table table-light table-striped text-dark">
              <thead>
                <tr className="rounded-top">
                  <th>ID</th>
                  <th>User Email</th>
                  <th>Branch</th>
                  <th>Time</th>
                  <th>Pax</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation, index) => (
                  <tr key={index}>
                    <td>{reservation.id}</td>
                    <td>{reservation.user_id}</td>
                    <td>{reservation.branch}</td>
                    <td>{reservation.time}</td>
                    <td>{reservation.pax}</td>
                    <td>
                      <button className="me-2 btn btn-success" onClick={() => handleAcceptReservation(reservation.id)}>
                        Accept
                      </button>
                      <button className="btn btn-danger" onClick={() => handleCancelReservation(reservation.id)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order management */}
      <div id="order-management">
        <div className="py-4 bg-dark text-light">
          <h1 className="mb-3">Orders</h1>
          <div className="h-100">
            <table className="w-75 mt-2 mx-auto table table-light table-striped text-dark">
              <thead>
                <tr className="rounded-top">
                  <th>ID</th>
                  <th>User Email</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.user_id}</td>
                    <td>{order.menu_items.length}</td>
                    <td>Rs. {order.total}</td>
                    <td>
                      <button className="me-2 btn btn-success" onClick={() => handleAcceptOrder(order.id)}>
                        Accept
                      </button>
                      <button className="btn btn-danger" onClick={() => handleCancelOrder(order.id)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-dark border-top">
        <div className="w-75 mx-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Staff;
