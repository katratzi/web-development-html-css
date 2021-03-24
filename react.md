# react

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(what?, where?);

All react components need to import React. And to export...

import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;

Note, when importing in es6 the file extension is optional
e.g.
import Heading from "./Heading.jsx";
import Heading from "./Heading"; // also ok

// import & export
// the default can be imported as any name we like
export default pi;
import pie from ...

// to export more items, use curly brackets
// and import and in this case the names must match
export { doublePi, triplePi};
import pi { doublePi, triplePi} from ..

//import everything with, then you can use pie.pi, pie.doublePi etc 
import * as pie from ...

//note when importing, order isn't important but names must match exactly