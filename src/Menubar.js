import "./App.css";
import React, { Component } from "react";
import {
  FaHome,
  FaBriefcase,
  FaCopy,
  FaImage,
  FaQuestion,
  FaPaperPlane,
  FaSortDown,
} from "react-icons/fa";



export default class Menubar extends Component {
  render() {
    return (
      <div
        style={{
          color: "white",
          margin: "0px",
          padding: "0px",
        }}
      >
        <h1
          style={{
            backgroundColor: "#6d7fcc",
            textAlign: "left",
            padding: "50px 40px",
            margin: 0,
          }}
        >
          Bootstrap <br></br> Sidebar
        </h1>
        <div style={{ backgroundColor: "#7386d7" }}>
          <h3
            style={{
              textAlign: "left",
              padding: "40px 10px",
            }}
          >
            Dummy Heading
          </h3>

          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
              alignItems: "center",
              fontSize: "30px",
              paddingBottom: "24em",
            }}
          >
            <li className="d-flex justify-content-between align-items-center">
              <div>
                <FaHome />
                <span className="item">{this.props.item1}</span>
              </div>
              <FaSortDown style={{ marginRight: "30px" }} />
            </li>
            <li className="d-flex align-items-center">
              <FaBriefcase />
              <span className="item">{this.props.item2}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <div>
                <FaCopy />
                <span className="item">{this.props.item3}</span>
              </div>
              <FaSortDown style={{ marginRight: "30px" }} />
            </li>
            <li className="d-flex align-items-center">
              <FaImage />
              <span className="item">{this.props.item4}</span>
            </li>
            <li className="d-flex align-items-center">
              <FaQuestion />
              <span className="item">{this.props.item5}</span>
            </li>
            <li className="d-flex align-items-center">
              <FaPaperPlane />
              <span className="item">{this.props.item6}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
