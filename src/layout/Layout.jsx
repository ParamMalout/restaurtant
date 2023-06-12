import React, { useEffect, useState } from "react";
import Home from "../page/Home";
import { Route, Routes } from "react-router-dom";
import ShowRestaurtant from "../page/ShowRestaurtant";
import Mamoto from "../page/Mamoto";
import ThirdApi from "../page/ThirdPage";
import { BsCart4 } from "react-icons/bs";
import { Modal } from "antd";
import { BiRupee } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ForFont } from "../component/Header";
import { useSelector, useDispatch } from "react-redux";
import { FilterConditions } from "../CreateSlice/CreateSlice";
import OrderPage from "../page/OrderPage";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "dark" : "dark",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "orange",
  fontWeight: "600",
}));
const Layout = () => {
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.countValue.value);

  let LengtNOw = selector.length;
  const [OpenCart, setOpenCart] = useState(false);
  const showCart = () => {
    setOpenCart(true);
  };
  useEffect(() => {});

  let Reducenow = selector.reduce((total, value) => {
    return total + value.total;
  }, 0);

  const removeItem = (id) => {
    dispatch(FilterConditions(id));
  };

  const closeCart = () => {
    setOpenCart(false);
  };
  const [ordernow, setOrder] = useState(false);
  let SignUPNow = () => {
    setOrder(true);
    setOpenCart(false);
  };
  const closeOrder = () => {
    setOrder(false);
  };
  return (
    <>
      <div className="Icon">
        <BsCart4
          style={{
            width: "3rem ",
            height: "3rem",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => {
            showCart();
          }}
        />
      </div>
      <div>
        <button className="cartBtn">{LengtNOw}</button>
      </div>
      <Modal open={OpenCart} footer={[]} onCancel={closeCart}>
        <div className="mainHeightDiv">
          {selector.map((ele, i) => {
            console.log(i, "value check");
            return (
              <>
                <div className="flex1">
                  <div className="flex">
                    <div style={{ width: "20%" }}>
                      <img
                        src={ele.pic}
                        style={{
                          width: "100%",
                          borderRadius: "12px",
                          border: "1px solid",
                        }}
                        alt="There is not"
                      />
                    </div>
                    <div>
                      <ForFont color="black" fontSize="1rem" fontFamily="none">
                        {ele.Heading}
                      </ForFont>

                      <div>
                        <BiRupee className="iconOfRuppe" />
                        <span>{ele.total}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="buttonAdd" onClick={() => removeItem(i)}>
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="MarginHodl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <span style={{ color: "dark" }}>Total:{Reducenow}</span>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Total Item:{LengtNOw} </Item>
              </Grid>
              <Grid item xs={4} className="ordernow">
                <Item onClick={SignUPNow}>OrderNow</Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Modal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Restautant" element={<ShowRestaurtant />} />
        <Route path="/Mamoto" element={<Mamoto />} />
        <Route path="/Third" element={<ThirdApi />} />
      </Routes>
      <Modal open={ordernow} footer={[]} onCancel={closeOrder}>
        {selector.length >= 1 ? (
          <OrderPage closeOrder={closeOrder} />
        ) : (
          <>
            <div style={{ color: "red", fontSize: "1.3rem" }}>
              Oops!!! You did n't Order Anything
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Layout;
