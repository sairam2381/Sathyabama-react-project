import React from "react";
import { DummyStyle } from "./dummy-style";
const DummyComponent = () => {
  return (
    <DummyStyle>
      <div className="div1">
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div2"></div>
      </div>
    </DummyStyle>
  );
};
export default DummyComponent;
