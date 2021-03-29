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

# import & export
the default can be imported as any name we like
export default pi;
import pie from ...

// to export more items, use curly brackets
// and import and in this case the names must match
export { doublePi, triplePi};
import pi { doublePi, triplePi} from ..

//import everything with, then you can use pie.pi, pie.doublePi etc 
import * as pie from ...

//note when importing, order isn't important but names must match exactly

# inline styling
create a javascript object for inline styling of a property.  Remember, use camelCase for css property
return <p style={{textDecoration : "line-through"}}>Buy Milk </p>

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

# Ternary and And

Ternary operator for conditional rendering just like C#
some check ? TRUE : FALSE

// if you want to render nothing. can use null
currentTime > 12 ? <h1>Why are you still working?</h1> : null
// but often you'll see the && operator as a wee shorthand hack
currentTime > 12 && <h1>Why are you still working?</h1>

const isLoggedIn = false;
const currentTime = new Date(2021, 1, 1, 14).getHours();

function App() {
  return (
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    <div className="container">
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

# declaritive vs imperative programming

With imperative programming we are kind of telling the app what to do and changing styles.  E.g. click a button, then get and element by id, and set it to line-through.  
Declaritive programming on the other hand you describe what the ui should look like based on it's state.  E.g. if isClicked display with line-through otherwise normal.  And in order for it to work need to use 'hooks' to make it responsive to the state. 

# state

import React from 'react';
function App(){
 const state = React.useState(1234);
 // OR import the extra method we need...
import React, {useState} from 'react';
function App(){
 const state = useState(1234);

 # destructuring

// can map values from an array use destructuring...
 const [red, green, blue] = [23, 123, 40];
 console.log(red);
 // then for our useState thingy...
 instead of ... const state = useState(123)
 where we'd have to access the value via state[0] (and state[1] is some fancy function)
 const [count] = useState(123)
 jsx = <p>{count}</p>

 // when we want to alter this value.  get the function from useState
 const [count, setCount] = useState(123);
 function increase(){
   setCount(111);
 }

// "this state comes from the useState hook.  and this function comes from the React module"

# controlled components

For something like an input form, we want to have a single source of truth.  
So we set the 'value' attribute in the form to be the value we set in our component. like so...


function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Welcome {name} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} <-------- here
      />
      <button>Submit</button>
    </div>
  );
}

# forms

can catch the event and prevent default to stop it refreshing the page (and we lose the values we have)
note button type has type submit which calls the form function

function handleSubmit(event) {
    setSubmittedName(name);
    event.preventDefault();
  }

...
      <form onClick={handleSubmit}>
        <input...
        <button type="submit">Submit</button>