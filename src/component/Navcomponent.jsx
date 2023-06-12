import React, { useState } from "react";
import { ForFont, NavWrapper } from "./Header";
import { InnerWrapper } from "../page/Home";
import { Modal } from "antd";
import SignUpPage from "./SignUpPage";

const Navcomponent = () => {
  const [OpenCart, setOpenCart] = useState(false);
  const showLogin = () => {
    setOpenCart(true);
  };
  const closeLogin = () => {
    setOpenCart(false);
  };
  return (
    <>
      <NavWrapper>
        <InnerWrapper content="space-between" className="LoginNow" width="70%">
          <ForFont color="black" fontSize="3rem">
            Momato
          </ForFont>
          <InnerWrapper content="none" width="none">
            {/* <div>Login</div>
            <div onClick={showLogin}>Sign Up</div> */}
          </InnerWrapper>
        </InnerWrapper>
      </NavWrapper>
      <Modal open={OpenCart} footer={[]} style={{}} onCancel={closeLogin}>
        <SignUpPage />
      </Modal>
    </>
  );
};

export default Navcomponent;
