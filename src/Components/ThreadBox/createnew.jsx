import React from "react";
import * as s from "./style";
import { PlusSVG } from "../../Assets/svgs";

function CreatenewBox() {
  return (
    <>
      <s.CreateNewThreadButton>
        <PlusSVG />
      </s.CreateNewThreadButton>
    </>
  );
}

export default CreatenewBox;
