import React, { useState } from "react";
import { InnerWrapper, Wrapper } from "../page/Home";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
const Header = () => {
  return <></>;
};

export default Header;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: ${({ content }) => content || "center"};
`;

export const ForFont = styled.div`
  font-family: ${({ fontFamily }) => fontFamily || "'Sigmar', cursive;"};
  font-size: ${({ fontSize }) => fontSize || "6rem"};
  color: ${({ color }) => color || "white"};
`;
