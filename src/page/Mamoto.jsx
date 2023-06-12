import React from "react";
import { InnerWrapper, Wrapper } from "./Home";
import { ForFont } from "../component/Header";
import { GiManualJuicer, GiScooter } from "react-icons/gi";
import Reveal from "react-reveal/Reveal";
import { secondDescribeAPi } from "../services/Apiservices";
import { useLocation, useNavigate } from "react-router-dom";
import Navcomponent from "../component/Navcomponent";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";
const Mamoto = () => {
  const locationnow = useLocation();
  let newArray = secondDescribeAPi.filter(
    (ele) => ele.Rid === locationnow.state.id
  );
  let navigate = useNavigate();
  let orderNow = (ele) => {
    navigate("/Third", { state: { id: ele } });
  };
  return (
    <>
      <Navcomponent />
      <Wrapper marginTop="1rem">
        <InnerWrapper content="flex-start" width="70%">
          <button className="buttonNow">
            <div className="flex">
              <div>{<GiScooter className="iconsOfScooter" />}</div>
              <ForFont fontSize="1.2rem" color="red">
                Delivery
              </ForFont>
            </div>
          </button>
        </InnerWrapper>
      </Wrapper>
      <Wrapper marginTop="1rem">
        <InnerWrapper width="70%" content="flex-start">
          <ForFont fontSize="2rem" color="black">
            Pizza
          </ForFont>
          <GiManualJuicer className="Pizza" />
        </InnerWrapper>
      </Wrapper>
      <div className="container">
        <div className="inner_container">
          <Fade bottom>
            {newArray[0].menu.map((ele) => {
              return (
                <>
                  <div className="Gridcontainer">
                    <div>
                      <img
                        src={ele.photo}
                        alt="There is not  any "
                        className="gridImage"
                      />
                    </div>

                    <div className="hideshow">
                      <Fade bottom>
                        <div>
                          <span className="open">
                            Open now - 11 am-12am midnight
                          </span>
                        </div>
                        <ForFont fontSize="1rem" color="black">
                          {ele.Heading}
                        </ForFont>
                        <div className="best">The best cuisine we serve</div>
                        <ul>
                          <li className="li">Pizza</li>
                        </ul>
                        <div className="order">
                          <button onClick={() => orderNow(ele)}>
                            order now
                          </button>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </>
              );
            })}
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mamoto;
