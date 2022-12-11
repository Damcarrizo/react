import React from "react";
import "./loader.css";
import { LeapFrog } from "@uiball/loaders";

function Loader() {
  return <div className="loader"><LeapFrog size={128} speed={2.5} color="WHITE" /></div>;
}

export default Loader;
