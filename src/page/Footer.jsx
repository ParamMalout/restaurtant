import React from "react";
import { InnerWrapper, Wrapper } from "./Home";
import Flip from "react-reveal/Flip";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Flip top>
          <div className="flexFooter">
            <div className="imgOfFooter">
              <img
                src="https://momato-1.web.app/static/media/Smokeburger1.0cd8b3ce.jpg"
                alt="There is not any"
              />
            </div>

            <div className="Company">
              <div>Company</div>
              <ul>
                <li>Who we Are</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </Flip>
      </div>
    </>
  );
};

export default Footer;
