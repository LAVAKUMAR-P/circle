import React from "react";

export default function Circle(props) {
  return (
    <div className="col-lg-4">
      <div>
        <div>
          <h4 style={{ color: "#fff" }} className="center mt-3">{props.data.num}</h4>
        </div>
        <br></br>
        <div className="center">
          <div
            className="dot"
            style={{ backgroundColor: props.data.id }}
            onClick={() => {
              props.handleclick(props.data.id);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
