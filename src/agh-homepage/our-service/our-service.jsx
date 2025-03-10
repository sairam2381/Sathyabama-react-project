import React from "react";
import { OurServiceStyled } from "./our-service-style";
const OurService = () => {
  return (
    <OurServiceStyled>
      <h1>Our Services</h1>
      <h2>Simple pricing for your business</h2>
      <div className="sentence">
        We have several powerful plans to showcase your business and get
        discovered as a creative entrepreneurs. Everything you need.
      </div>
      <div className="parent">
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
      </div>
    </OurServiceStyled>
  );
};
export default OurService;
