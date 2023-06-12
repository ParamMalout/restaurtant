import React from "react";
import { ForFont } from "./Header";

const GridPics = ({ ele, orderNow }) => {
  return (
    <>
      <div className="Gridcontainer">
        <div>
          <img
            src={ele.photo}
            alt="There is not  any image "
            className="gridImage"
          />
        </div>

        <div className="hideshow">
          <div>
            <span className="open">Open now - 11 am-12am midnight</span>
          </div>
          <ForFont fontSize="1rem" color="black">
            {ele.Heading}
          </ForFont>
          <div className="best">The best cuisine we serve</div>
          <ul>
            <li className="li">Pizza</li>
          </ul>
          <div className="order">
            <button onClick={() => orderNow(ele.mid)}>order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridPics;
