import React from "react";
import { BiLogoReact } from "react-icons/bi";

export default function MainContent() {
  return (
    <div style={{}}>
      <div
        style={{
          textAlign: "left",
          marginTop:"10em"
        }}
      >

        <BiLogoReact
          style={{
            fontSize: "600px",
            textAlign: "left",
          }}
        ></BiLogoReact>
        <span
          style={{
            fontSize: "150px",
          }}
        >
          reactstrap
        </span>
      </div>
    </div>
  );
}
