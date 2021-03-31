import React, { useState } from "react";

function CreateArea(props) {

    // make this a controlled component
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {

        // destructor target to get name and value fields
        const { name, value } = event.target;

        // use spread operator for prev value, and change the new one
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }

    // pass a new note object back up and clear our inputs
    function handleAdd(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });

        // stop form refreshing whole page
        event.preventDefault();
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
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
