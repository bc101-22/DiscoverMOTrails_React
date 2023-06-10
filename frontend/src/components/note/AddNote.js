import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// this file is currently not used yet
function AddNote(props) {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState({
        trail: '',
        message: ''
    });

    const handleClickOpen = () => {
        setNote({
            trail: props.data.row.trail,
        })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        });
    }

    const handleSave = () => {
        props.addNote(note);
        handleClose();
    }

    return (
        <div>
            <button onClick={handleClickOpen}>New Note</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Note</DialogTitle>
                <DialogContent>
                    <input placeholder="Message" name="message"
                        value={note.message} onChange={handleChange}
                    /><br/>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddNote;