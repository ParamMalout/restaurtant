import React from "react";
import { useFormik, Field } from "formik";
import { inputMap } from "../services/Apiservices";
import styled, { css } from "styled-components";
import { Wrapper } from "../page/Home";
import { useDispatch } from "react-redux";
import { ValueUpdate } from "../CreateSlice/CreateSlice";
const SignUpPage = () => {
  const dispatch = useDispatch();
  let arr = [];
  const formik = useFormik({
    initialValues: {
      gmail: "",
      email: "",
      password: "",
      call: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      arr.push(values);
      localStorage.setItem("token", JSON.stringify(arr));
      dispatch(ValueUpdate(values));
    },
  });
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        {inputMap.map((ele) => {
          return (
            <>
              <SpotifyFont
                fontFamily=" 'Open Sans', sans-serif;"
                marginTop="1.4rem"
              >
                {ele.heading}
              </SpotifyFont>
              <Input
                width="25rem"
                id={ele.id}
                name={ele.id}
                type={ele.type}
                placeholder={ele.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[ele.id]}
                className="checkBoxRound"
              />
              {formik.touched[ele.id] && formik.errors[ele.id] ? (
                <div>{formik.errors[ele.id]}</div>
              ) : null}
            </>
          );
        })}
        <div className="flexnow">
          <Button type="submit" background="orange" color="white">
            Sign up
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SignUpPage;
const Input = styled.input`
  width: ${(props) => props.width || "10rem"};
  height: ${(props) => props.height || "2.5rem"};
  border-radius: ${(props) => props.borderRadius || "0.2rem"};
  border: 0.5px solid grey;
  margin-top: 0.5rem;
  &.checkBoxRound {
    cursor: pointer;
    padding-left: ${(props) => props.padding || "2rem"};
  }
`;
export const SpotifyFont = styled.div`
  font-family: ${(props) => props.fontFamily || "none"};
  font-size: ${(props) => props.fontSize || "1rem"};
  margin-left: ${(props) => props.marginLeft || "0rem"};
  margin-top: ${(props) => props.marginTop || "0rem"};
  color: ${({ color }) => color || "none"};
  cursor: ${({ cursor }) => cursor || "none"};
  &.HoverIcons:hover {
    color: green;
  }
  ${({ primary }) =>
    primary &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
export const Button = styled.button`
  border-radius: 2rem;
  height: 2.5rem;
  font-size: 1rem;
  width: ${({ width }) => width || "8rem"};
  text-align: center;
  background-color: ${(props) => props.background || "green"};
  color: ${(props) => props.color || "black"};
  border: ${(props) => props.border || "none"};
  font-family: "Rubik", sans-serif;
  margin-top: ${({ marginTop }) => marginTop || "0rem"};
  margin-left: ${({ marginLeft }) => marginLeft || "0rem"};
  &.premiumButton:hover {
    transform: scale(1.1, 1.1);
  }
  ${({ primary }) =>
    primary &&
    css`
      border-radius: 0.4rem;
    `}
  ${({ customheight }) =>
    customheight &&
    css`
      height: 3rem;
    `}
`;
