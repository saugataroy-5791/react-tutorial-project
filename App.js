import React from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);
