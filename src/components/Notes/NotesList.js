import React from 'react'

const NotesList = ({item, deleteNoteProp}) => {

    const deleteNote = _ => deleteNoteProp(item)


    return (
        <div className='NotesList'>
            <div>{item.note}</div>
            <div><input type="button" value='Delete' onClick={deleteNote}></input></div>
        </div>
    )
}

export default NotesList;