// Import Libraries
import react, { useState } from "react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import List from "./List";
import Top from "./Top";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Create Components
const App = () => {
  const [state, setstate] = React.useState(0);
  const increase = () => {
    setstate((count) => count + 1);
  };
  const decrease = () => {
    setstate((count) => count - 1);
  };
  return (
    <div className="App">
      <Button variant="primary" onClick={increase}>
        Tambah
      </Button>{" "}
      <br />
      <span>{state}</span>
      <br />
      <Button variant="danger" onClick={decrease}>
        Kurang
      </Button>
      <br />
      <Button variant="outline-info" onClick={() => setstate(0)}>
        Reset
      </Button>
      <br />
      <Header list="10 Daftar Makanan" />
      <Top />
      <List />
      <Footer />
    </div>
  );
};
// Export Default
export default App;
