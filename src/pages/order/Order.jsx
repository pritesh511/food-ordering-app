import React from "react";
import "./order.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmptyCurrentOrder } from "../../redux/slices/orderslice";
import { BASE_IMG_URL } from "../../utils/constant";

const Order = () => {
  const dispatch = useDispatch();

  const current_order = useSelector((state) => state.orderslice.currentOrder);

  return (
    <>
      {current_order?.length === 0 ? (
        <h1>No order found</h1>
      ) : (
        <>
          <button onClick={() => dispatch(setEmptyCurrentOrder())}>
            Order Deliverd
          </button>
          <table className="food-table">
            <thead>
              <tr>
                <th className="food-th">No</th>
                <th className="food-th">Item</th>
                <th className="food-th">Item Name</th>
                <th className="food-th">Item Qty</th>
                <th className="food-th">Item Price</th>
                <th className="food-th">Total</th>
              </tr>
            </thead>
            <tbody>
              {current_order?.map((order, index) => {
                return (
                  <tr key={order?.id}>
                    <td className="food-td">{index + 1}</td>
                    <td className="food-td">
                      <img
                        className="order-food-image"
                        src={BASE_IMG_URL + order?.imageId}
                        alt="food-image"
                      />
                    </td>
                    <td className="food-td">{order?.name}</td>
                    <td className="food-td">{order?.qty}</td>
                    <td className="food-td">
                      {Math.trunc(
                        parseInt(
                          order?.price ? order?.price : order?.defaultPrice
                        ) / 100
                      )}
                    </td>
                    <td className="food-td">
                      {Math.trunc(
                        parseInt(
                          (order?.price ? order?.price : order?.defaultPrice) /
                            100
                        ) * order?.qty
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="food-td"></td>
                <td className="food-td"></td>
                <td className="food-td"></td>
                <td className="food-td"></td>
                <td className="food-td">Total:</td>
                <td className="food-td">12345</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Order;
