import React, { useState } from "react";

function CreateArea(props) {

    // make this a controlled component
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {

        const newValue = event.target.value;
        const name = event.target.name;

        // use spread operator for prev value, and change the new one
        setNote(function (prevNote) {
            return {
                ...prevNote,
                [name]: newValue
            };
        })
    }

    // use the note.properties and use same handleChange method 
    // using the name attribute to determine what we changed
    return (
        <div>
            <form>
                <input name="title"
                    placeholder="Title"
                    value={note.title} onChange={handleChange} />
                <textarea name="content"
                    placeholder="Take a note..." rows="3"
                    value={note.content} onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
