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

# Props

Pass our own custom properties to a custom component.  Called props by convention. Looks like...

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="http://something.jpg"
      tel="+123 456 789"
    />

    <Card
      name="Jack Bauer"
      img="https://another.jpg"
      tel="+987 654 321"
    />
  </div>,
  document.getElementById("root")
);


# map

When creating a list with a function, like the map funtion, need to provide a unique key for each entry

function createCard(contact)
{
  return <Card 
  key={contact.id}
  name={contact.name} />
}

{contacts.map(createCard)}