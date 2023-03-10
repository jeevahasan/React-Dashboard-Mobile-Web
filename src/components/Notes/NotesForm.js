import React, {useState} from 'react'
import { useRef } from "react";


const NotesForm = ({addNoteProp}) => {
    const inputElement = useRef();

    const [note, setNote] = useState('');
//adding new note
    const addNote = _ => {
        addNoteProp({
            id: (new Date).getTime(),
            note
        })
        setNote('');
        //setting the focus 
        inputElement.current.focus();
    }

    return (
        <div>
            <input type="noteText" placeholder='Note' ref={inputElement} value={note} onChange={
                event => {
                    setNote(event.target.value)
                }
            }></input>
            <input type="button" value='Add' onClick={addNote}></input>
        </div>
    )
}

export default NotesForm;