import React from "react";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { Navbar, Nav,NavLink } from "reactstrap";

export default function MyNavbar() {
  return (
    <div style={{ fontSize: "30px",padding:"15px" }}>
      <Navbar className="d-flex justify-content-between" style={{
        padding:'15px',
        color:"black",
        border:"2px solid #f0f0f0",
        boxShadow:"5px 5px 5px 5px #f0f0f0",
        borderRadius:"5px",
        marginTop:"30px",
        backgroundColor:"white"
      }}>
          <BsReverseListColumnsReverse style={{
            padding:"10px",
            border:"1px solid blue",
            fontSize:"60px",
            borderRadius:"10%",
            backgroundColor:"#4aa3b9",
            color:"white",
          }}/>
        <Nav>
          <NavLink href="/page1">Page 1</NavLink>
          <NavLink href="/page2">Page 2</NavLink>
          <NavLink href="/page3">Page 3</NavLink>
          <NavLink href="/page4">Page 4</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
