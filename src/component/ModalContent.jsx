import React from "react";

const ModalContent = (prop) => {
  return (
    <>
      <div className="outerDiv">
        <div className="innerDiv">
          <img
            src={prop.pic}
            alt="There is not any image"
            style={{ width: "100%" }}
          />
          <div>
            <h3>Your Order is Delicious yuuppp........</h3>
          </div>
          <div>
            <h2 style={{ color: "red" }}>Price of Order</h2>
          </div>
          <div>
            <span className="totalnwo">{prop.price}</span>
          </div>
          <div className="btn">
            <div className="flex">
              <button
                className="clickme1"
                onClick={() => {
                  prop.localstorage();
                  prop.handleCancel();
                }}
              >
                Add more
              </button>
              <button className="clickme" onClick={() => prop.handleCancel()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContent;
