import React from "react";
function MenuPage() {
  return (
    <div>
      <div id="menu" className="bg-dark pt-5 pb-4">
        <div className="mb-3">
          <h1 className="text-white">Menu</h1>
        </div>
        <div className="text-white d-flex">
          <div className="w-50">
            <div className="mb-2 fs-5 fs-semibold">Main Course</div>
            <div className="ms-5">
              <table className="table table-dark table-striped w-100 main-course ">
                <tbody>
                  <tr>
                    <td>Cheese Pepperoni Pizza</td>
                    <td>1850</td>
                  </tr>
                  <tr>
                    <td>Club Sandwich with fries</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Cheese Chicken Burger with fries</td>
                    <td>1150</td>
                  </tr>
                  <tr>
                    <td>Chicken Wings</td>
                    <td>850</td>
                  </tr>
                  <tr>
                    <td>Spicy Cheese Pasta</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>Grilled Hot Dog with chips</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-50">
            <img
              src="assets/Menu1.jpg"
              alt="menu 1"
              className="object-fit-cover w-75"
            />
          </div>
        </div>

        <div className=" d-flex mt-4 bg-white py-3">
          <div className="w-50">
            <img
              src="assets/Menu2.jpg"
              alt="menu 1"
              className="object-fit-cover w-50"
            />
          </div>
          <div className="w-50">
            <div className="mb-2 fs-5 fs-semibold">Appertizers</div>
            <div className="me-5">
              <table className="table table-striped w-100 main-course ">
                <tbody>
                  <tr>
                    <td>Cheese Garlic Toast</td>
                    <td>850</td>
                  </tr>
                  <tr>
                    <td>French Fries</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Chicken Cheese balls</td>
                    <td>700</td>
                  </tr>
                  <tr>
                    <td>Chicken Nuggets</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>Chilli Chesse Nachos</td>
                    <td>1100</td>
                  </tr>
                  <tr>
                    <td>Quesadillas</td>
                    <td>800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-white d-flex pt-4">
          <div className="w-50">
            <div className="mb-2 fs-5 fs-semibold">Beverages</div>
            <div className="ms-5">
              <table className="table table-dark table-striped w-100 main-course ">
                <tbody>
                  <tr>
                    <td>Blue Lagoon Cocktail</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Iced Tea</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td>Orange Juice</td>
                    <td>550</td>
                  </tr>
                  <tr>
                    <td>Latte</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>Strawberry Oreo Milkshake</td>
                    <td>700</td>
                  </tr>
                  <tr>
                    <td>Black Current Mojito</td>
                    <td>750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-50">
            <img
              src="assets/Menu3.jpg"
              alt="menu 1"
              className="object-fit-cover w-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuPage;
