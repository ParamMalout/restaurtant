import React from "react";
import { ForFont } from "./Header";
import { BiRupee } from "react-icons/bi";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const ItemsShow = ({ ele, showModal, Addnow, UseStateImage }) => {
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
            />
          </div>
          <div>
            <ForFont color="black" fontSize="2rem" fontFamily="none">
              {ele.Heading}
            </ForFont>
            <div>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
            <div>
              <BiRupee className="iconOfRuppe" />
              <span>{ele.total}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            className="buttonAdd"
            onClick={() => {
            //   Addnow(ele.total);
              showModal();
              UseStateImage(ele);
            }}
          >
            Add +
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemsShow;
