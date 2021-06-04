import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import Welcome from "./Welcome";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="MenuBar">
        <MenuBar />
      </div>
      <Welcome />
    </div>
  );
}

export default HomePage;
