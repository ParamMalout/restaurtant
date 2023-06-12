import React, { useState } from "react";
import { Wrapper } from "./Home";
import { ForFont } from "../component/Header";
import { useLocation } from "react-router-dom";
import { Modal } from "antd";
import ModalContent from "../component/ModalContent";
import Navcomponent from "../component/Navcomponent";
import { thirdGridApi } from "../services/Apiservices";
import ItemsShow from "../component/ItemsShow";
import Flip from "react-reveal/Flip";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { ValueUpdate } from "../CreateSlice/CreateSlice";
const ThirdApi = () => {
  let dispatch = useDispatch();
  let location = useLocation();
  // const [add, setAdd] = useState(null);
  const [pic, setPic] = useState({
    pic: "",
    price: "",
  });
  const [local, setLocal] = useState(null);
  let photo = location.state.id.photo;
  const IdofLOcation = location.state.id.mid;
  let arr;
  const FinalApihere = thirdGridApi.filter((ele) =>
    ele.menu.filter((eles) => {
      if (eles.mid === IdofLOcation) {
        arr = eles.subState;
        return eles.subState;
      }
    })
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const UseStateImage = (value) => {
    setLocal(value);
    pic.pic = value.pic;
    pic.price = value.total;
    setPic({ ...pic });
  };

  const localstorage = () => {
    dispatch(ValueUpdate(local));
  };
  return (
    <>
      <Navcomponent />
      <Wrapper content="center" Direction="column">
        <div style={{ width: "70%" }}>
          <Wrapper>
            <div className="imgWidth">
              <img
                src={photo}
                alt="There is not any "
                className="widthofImagenow"
              />
            </div>
            <div className="secondImage">
              <Wrapper>
                <div className="secondDiv">
                  <img
                    src={photo}
                    alt="There is not any"
                    className="widthOfImage"
                  />
                </div>
                <div className="secondDiv">
                  <img
                    src={photo}
                    alt="There is not any "
                    className="widthOfImage"
                  />
                </div>
              </Wrapper>
              <div>
                <Wrapper>
                  <div className="secondDiv">
                    <img
                      src={photo}
                      alt="There is not any "
                      className="widthOfImage"
                    />
                  </div>
                  <div className="secondDiv">
                    <img
                      src={photo}
                      alt="There is not any "
                      className="widthOfImage"
                    />
                  </div>
                </Wrapper>
              </div>
            </div>
          </Wrapper>
          {arr.map((ele) => {
            return (
              <>
                <Flip top>
                  <ItemsShow
                    ele={ele}
                    showModal={showModal}
                    UseStateImage={UseStateImage}
                  />
                </Flip>
              </>
            );
          })}
        </div>
        <hr style={{ width: "70%" }} />
        <ForFont fontFamily="none" fontSize="2rem" color="black">
          {/* Total :{add} */}
        </ForFont>
      </Wrapper>
      <Modal
        open={isModalOpen}
        footer={[]}
        onCancel={handleCancel}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ModalContent
          handleCancel={handleCancel}
          pic={pic.pic}
          price={pic.price}
          localstorage={localstorage}
        />
      </Modal>
      <Footer />
    </>
  );
};

export default ThirdApi;
