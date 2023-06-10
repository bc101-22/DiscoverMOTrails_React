package com.discovermotrails.securitybackend.controller;

import com.discovermotrails.securitybackend.model.Bookmark;
import com.discovermotrails.securitybackend.model.Note;
import com.discovermotrails.securitybackend.model.Trail;
import com.discovermotrails.securitybackend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/")
public class NoteController {
    @Autowired
    NoteRepository noteRepository;

    // for testing only, not used in the actual app
    @GetMapping("/allnotes")
    public Iterable<Note> getNotes() {
        return noteRepository.findAll();
    }

    // example: to access notes of user with id 2, use the url http://localhost:8080/api/mynotes?uid=2
    @GetMapping("/mynotes")
    public Iterable<Note> getUserBookmarks(@RequestParam Integer uid) {

        return noteRepository.findByUserId(uid);
    }

    @GetMapping("/note")
    public Note getNoteById(@RequestParam int nid) {
        Optional<Note> note = noteRepository.findById(nid);
        if(note.isEmpty()) return null;
        return note.get();
    }

    @PostMapping("/mynotes")
    public Note addNote(@RequestBody Note note){
        noteRepository.save(note); //TODO - add error checking
        return note;
    }

    @PutMapping("/note")
    public Note editTrail(@RequestParam int nid, @RequestBody Note note) {
        noteRepository.save(note); //TODO - add error checking
        return note;
    }

    @DeleteMapping("/note")
    public void deleteBookmark(@RequestParam int nid) {
        Optional<Note> note = noteRepository.findById(nid);
        if(!note.isEmpty())
            noteRepository.delete(note.get());
    }
}
