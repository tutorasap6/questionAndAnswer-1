import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "antd";
import axios from "axios";

const Checkout = ({ post }) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              //   value: 1000,
              value: post.insertPrice,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (err) => {
    alert(err);
  };

  useEffect(() => {
    if (success) {
      alert('success')
      const fetchFile = async () => {
        try {
          const token = localStorage.token;
          await axios.get('http://localhost:5000/check', {headers: {'x-auth-token': token}});
          const res = await axios.get(`http://localhost:5000/file/${post.answer}`, {responseType: "blob", headers: {'x-auth-token': token}});

          const url = window.URL.createObjectURL(res.data);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", post.answer); //or any other extension
          document.body.appendChild(link);
          link.click();
        } catch (e) {
          console.log(e);
        }
      };
      fetchFile();
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  console.log(process.env.CLIENT_ID);

  return (
    <PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
      <div>
        <div className="wrapper">
          <div className="product-info">
            <div className="product-price-btn">
              <br></br>

              <div>
                <Button
                  block
                  onClick={() => setShow(true)}
                  style={{ fontWeight: "bold" }}
                >
                  Download this answer instantly at {post.insertPrice}$
                </Button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            fundingSource="paypal"
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null}
      </div>
    </PayPalScriptProvider>
  );
};

export default Checkout;
