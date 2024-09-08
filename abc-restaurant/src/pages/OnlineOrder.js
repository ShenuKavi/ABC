import React, { useState, useEffect } from "react";

function OnlineOrder() {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Cheese Pepperoni Pizza', price: 1850, photo: 'assets/Cheesypepperoni pizza.jpg', quantity: 1 },
    { id: 2, name: 'Club Sandwich with fries', price: 1200, photo: 'assets/clubsandwich.jpg', quantity: 1 },
    { id: 3, name: 'Cheese Chicken Burger with fries', price: 1150, photo: 'assets/cheeseburger.jpg', quantity: 1 },
    { id: 4, name: 'Chicken Wings', price: 850, photo: 'assets/chickenwings.jpg', quantity: 1 },
    { id: 5, name: 'Spicy Chesse Pasta', price: 1100, photo: 'assets/cheesepasta.jpg', quantity: 1 },
    { id: 6, name: 'Grilled Hot Dog with chips', price: 500, photo: 'assets/hotdog.jpg', quantity: 1 },
    { id: 7, name: 'Cheese Garlic Toast', price: 850, photo: 'assets/cheesegarlictoast.jpg', quantity: 1 },
    { id: 8, name: 'French Fries', price: 600, photo: 'assets/Frenchfries.jpg', quantity: 1 },
    { id: 9, name: 'Chicken Cheese balls', price: 700, photo: 'assets/chickencheeseballs.jpg', quantity: 1 },
    { id: 10, name: 'Chicken Nuggets', price: 500, photo: 'assets/nugets.jpeg', quantity: 1 },
    { id: 11, name: 'Chilli Cheese Nachos', price: 1100, photo: 'assets/Nachos.jpg', quantity: 1 },
    { id: 12, name: 'Quesadillas', price: 800, photo: 'assets/quesadilla.jpg', quantity: 1 },
    { id: 13, name: 'Blue Lagoon Cocktail', price: 600, photo: 'assets/bluelagoon.jpg', quantity: 1 },
    { id: 14, name: 'Iced Tea', price: 450, photo: 'assets/iced tea.png', quantity: 1 },
    { id: 15, name: 'Orange Juice', price: 550, photo: 'assets/Orangejuice.jpg', quantity: 1 },
    { id: 16, name: 'Latte', price: 400, photo: 'assets/latte.jpg', quantity: 1 },
    { id: 17, name: 'Strawberry Oreo Milkshake', price: 700, photo: 'assets/Strawberrymilkshake.jpg', quantity: 1 },
    { id: 18, name: 'Black Current Mojito', price: 750, photo: 'assets/mojito.jpg', quantity: 1 },
  ]);

  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  const selectedOrder = orders[selectedOrderIndex];

  useEffect(() => {
    if (selectedOrder) {
      setLastOrderTotal(selectedOrder.price * selectedOrder.quantity);
    }
  }, [selectedOrder]);

  const handleQuantityChange = (amount) => {
    setOrders(orders.map((order, index) => {
      if (index === selectedOrderIndex) {
        const updatedQuantity = Math.max(1, order.quantity + amount);
        return { ...order, quantity: updatedQuantity };
      }
      return order;
    }));
  };

  const handleNextItem = () => {
    setSelectedOrderIndex((selectedOrderIndex + 1) % orders.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-black text-white">
      <h1 className="text-3xl font-bold">Online Order</h1>

      {/* Display the selected order */}
      <div className="relative bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-4 flex items-center border-2 border-yellow-500">
        <img src={selectedOrder.photo} alt={selectedOrder.name} className="w-20 h-20 object-cover mb-4 rounded-lg mr-4" />
        <div className="flex-grow">
          <h2 className="text-lg font-bold">{selectedOrder.name}</h2>
          <p className="text-lg">Rs.{selectedOrder.price}</p>
          <p className="text-lg">Quantity: {selectedOrder.quantity}</p>
        </div>
      </div>

      {/* Quantity controls and total amount display */}
      <div className="mt-8">
        <div className="flex items-center">
          <button
            className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="mx-4 text-lg font-bold">
            {selectedOrder.quantity}
          </span>
          <button
            className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <p className="text-lg font-bold mt-4">Total for Selected Item: Rs.{lastOrderTotal.toFixed(2)}</p>
      </div>

      {/* Next Item Button */}
      <div className="mt-8">
        <button
          className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg"
          onClick={handleNextItem}
        >
          Next Item
        </button>
      </div>
    </div>
  );
}

export default OnlineOrder;
