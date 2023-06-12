import React, { useState } from "react";
import styled from "styled-components";
import { gridview } from "../services/Apiservices";
import Header, { ForFont } from "../component/Header";
import { useNavigate } from "react-router-dom";
import Location from "../component/Location";
import LocationPage from "./LocationPage";
import Footer from "./Footer";
import Flip from "react-reveal/Flip";
const Home = () => {
  var resNew;
  const [gridhere, setGridhere] = useState([]);
  const navigate = useNavigate();
  const [resImg, setResImg] = useState(true);
  const showData = (id) => {
    navigate("/Mamoto", { state: { id: id } });
  };
  const [res, setRes] = useState("");
  function Resetaurtant(e) {
    setRes(e.target.value);
    setResImg(false);
    filterFunc(e.target.value);
  }
  function filterFunc(value) {
    let newValue = gridview.filter((ele) => {
      console.log(`res value inside is : `, value);
      return ele.name.toLowerCase().includes(value);
    });
    console.log(`new value is : `, newValue);
    setGridhere(newValue);
  }
  return (
    <>
      <div className="backGroundImage">
        <Wrapper content="center">
          <Flip top>
            <InnerWrapper
              width="100%"
              className="innerWrapper"
              Direction="column"
            >
              <ForFont>Momato</ForFont>
              <ForFont fontSize="2rem" fontFamily="none">
                Discover the best food & drinks by Momato
              </ForFont>
              <div className="searchBar">
                <input
                  type="text"
                  placeholder="Search for restaurant, cuisine or a dish "
                  className="InputCreatia"
                  value={res}
                  onChange={Resetaurtant}
                />
              </div>
            </InnerWrapper>
          </Flip>
        </Wrapper>
        <Flip top>
          <Wrapper>
            <InnerWrapper width="70%">
              <div className="grid-container">
                {gridhere.map((ele) => {
                  return (
                    <>
                      <Wrapper className="OuterWrapper" Direction="column">
                        <div>
                          <img
                            src={ele.photo}
                            alt="There is not any"
                            className="PhotoGrid"
                            onClick={() => showData(ele.Rid)}
                          />
                        </div>
                        <div className="NameOfgrid">{ele.name}</div>
                        <div>{ele.heading}</div>
                      </Wrapper>
                    </>
                  );
                })}

                {resImg &&
                  gridview.map((ele) => {
                    return (
                      <>
                        <Wrapper className="OuterWrapper" Direction="column">
                          <div>
                            <img
                              src={ele.photo}
                              alt="There is not any"
                              className="PhotoGrid"
                              onClick={() => showData(ele.Rid)}
                            />
                          </div>
                          <div className="NameOfgrid">{ele.name}</div>
                          <div>{ele.heading}</div>
                        </Wrapper>
                      </>
                    );
                  })}
              </div>
            </InnerWrapper>
          </Wrapper>
        </Flip>
      </div>
      {/* <Location />
      <LocationPage /> */}
      <Footer />
    </>
  );
};

export default Home;

export const Wrapper = styled.div`
  width: ${({ width }) => width || "100%"};
  display: flex;
  justify-content: ${({ content }) => content || "center"};
  align-items: center;
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "none"};
  flex-direction: ${({ Direction }) => Direction || "row"};
  margin-top: ${({ marginTop }) => marginTop || "none"};
`;
export const InnerWrapper = styled.div`
  width: ${({ width }) => width || "90%"};
  display: flex;
  justify-content: ${({ content }) => content || "center"};
  align-items: center;
  flex-direction: ${({ Direction }) => Direction || "row"};
`;
export const ForFontspan = styled.span`
  font-family: ${({ fontFamily }) => fontFamily || "'Sigmar', cursive;"};
  font-size: ${({ fontSize }) => fontSize || "6rem"};
  color: ${({ color }) => color || "white"};
`;
