import React from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./src/components/Header/Header";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Header />);
