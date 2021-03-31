import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    // notes start as empt array
    const [notes, setNotes] = useState([]);
    // const notes = [
    //     {
    //         key: 1,
    //         title: "Delegation",
    //         content:
    //             "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    //     },

    function addNote(note) {
        console.log("adding note");
        setNotes((prevValue) => [...notes, note]);
    }

    // return all the current notes by mapping over the array
    function createNotes() {
        return notes.map((note, index) => <Note key={index} title={note.title} content={note.content} />);
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {createNotes()}
            <Footer />
        </div>
    );
}

export default App;
