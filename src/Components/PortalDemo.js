import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>this is a react portal</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
