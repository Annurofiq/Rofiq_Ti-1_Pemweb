// Import Libraries
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import List from "./List.jsx";

// Create Component
const App = () => {
  return (
    <center>
      <div>
        <h1>Menu Kami</h1>
        <Header />
        <List linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
        <Footer judul="Halaman Footer" namaMhs="Rofiq" />
      </div>
    </center>
  );
};

export default App;
