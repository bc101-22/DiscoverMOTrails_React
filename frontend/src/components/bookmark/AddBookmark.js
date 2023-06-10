import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useUserContext } from '../../context/userContext';

function AddBookmark(props) {
    const [open, setOpen] = useState(false);
    const {user} = useUserContext();
    const [bookmark, setBookmark] = useState({
        user: '',
        trail: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setBookmark({
            ...bookmark,
            [event.target.name]: event.target.value
        });
    }

    const handleSave = () => {
        props.addBookmark(bookmark);
        handleClose();
    }

    return (
        <div>
            <button onClick={handleClickOpen}>New Bookmark</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Bookmark</DialogTitle>
                <DialogContent>
                    <input placeholder="User" name="user" 
                        value={user.id} type="hidden"/> 
                        {/* TODO - retrieve user from context */}
                    <input placeholder="Trail" name="trail"
                        value={bookmark.trail} onChange={handleChange}
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

export default AddBookmark;