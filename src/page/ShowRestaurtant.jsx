import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { secondDescribeAPi, thirdGridApi } from "../services/Apiservices";
import { Wrapper } from "./Home";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const ShowRestaurtant = () => {
  const [mid, setMid] = useState("");
  const locationnow = useLocation();
  let newArray = secondDescribeAPi.filter(
    (ele) => ele.Rid === locationnow.state.id
  );
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflowY: "scroll",
    height: "14.5rem",
  }));
  let menuNow = newArray[0].menu;
  let showValues = (id) => {
    setMid(id);
  };
  let ThirdApiNow = thirdGridApi.filter(async (ele) =>
    ele.menu.find(async (ele) => {
      let a = (await ele.mid) === mid;
      return a;
    })
  );
  let finalHere = ThirdApiNow[0].menu.filter((ele) => ele.mid === mid);
  return (
    <>
      <Wrapper>
        <div>
          <img
            src={newArray[0].photo}
            alt="There is not any "
            className="PhotoGrid"
          />
        </div>
      </Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={4}>
            <Item>
              {menuNow.map((ele) => {
                return (
                  <>
                    <div
                      className="mainWrapper"
                      onClick={() => showValues(ele.mid)}
                    >
                      {ele.name}
                    </div>
                  </>
                );
              })}
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              {finalHere.map((ele) => {
                return (
                  <>
                    <div className="mainWrapper">
                      The Item You have Selected {ele.name}
                    </div>
                    <div className="mainWrapper">
                      Price of {ele.name} is {ele.price}
                    </div>
                    <div className="mainWrapper">{ele.description}</div>
                  </>
                );
              })}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ShowRestaurtant;
