import React from "react";

function Footer(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <footer>©2025 Design with 😘 by {props.namaMhs}</footer>
    </div>
  );
}

export default Footer;
