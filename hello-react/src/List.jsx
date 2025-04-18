import React, { Component } from "react";
import Images from "./Images";

class List extends Component {
  render() {
    return (
      <>
        <Images />
        <ol>
          <li>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
              alt="Food 1"
              width="200"
            />
          </li>
          <li>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
              alt="Nasi Padang"
              width="200"
            />
          </li>
          <li>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
              alt="Sate"
              width="200"
            />
          </li>
          <li>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
              alt="Soto Lamongan"
              width="200"
            />
          </li>
        </ol>
      </>
    );
  }
}

export default List;
