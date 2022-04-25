import React from "react";
import { Items } from "./components/ItemsI";
import { MenuI } from "./components/MenuI";
import "./1.css";

export const I = () => {
  return (
    <div className="I">
      <div className="container">
        <MenuI />
        <Items />
      </div>
    </div>
  );
};
