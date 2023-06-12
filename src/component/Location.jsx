import React from "react";
import { ForFontspan, InnerWrapper, Wrapper } from "../page/Home";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Cities } from "../services/Apiservices";
import { ForFont } from "./Header";
import Wobble from "react-reveal/Wobble";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Location = () => {
  return (
    <>
      <Wrapper>
        <InnerWrapper width="70%" content="flex-start" Direction="column">
          <Wrapper className="centerAlign" content="center">
            <ForFontspan fontSize="6rem" color="black" fontFamily="none">
              Location
            </ForFontspan>{" "}
            <ForFontspan
              fontSize="2rem"
              color="rgba(255,68,0,.822)"
              className="cities"
              fontFamily="none"
            >
              Cities We Deliver To
            </ForFontspan>
          </Wrapper>
          <Wobble>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {Cities.map((ele) => {
                  return (
                    <>
                      <Grid item xs={4}>
                        <Item>
                          <ForFont
                            fontSize="1rem"
                            color="#9c1616"
                            fontFamily="none"
                          >
                            {" "}
                            {ele}
                          </ForFont>
                        </Item>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Wobble>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Location;
