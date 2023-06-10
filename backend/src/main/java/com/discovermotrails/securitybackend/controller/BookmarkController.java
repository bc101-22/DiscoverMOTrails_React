package com.discovermotrails.securitybackend.controller;

import com.discovermotrails.securitybackend.model.Bookmark;
import com.discovermotrails.securitybackend.model.Trail;
import com.discovermotrails.securitybackend.repository.BookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("api/")
public class BookmarkController {
    @Autowired
    private BookmarkRepository bookmarkRepository;

    // example: to access bookmarks of user with id 2, use the url http://localhost:8080/api/mybookmarks?uid=2
    @GetMapping("/mybookmarks")
    public Iterable<Bookmark> getUserBookmarks(@RequestParam Integer uid) {

        return bookmarkRepository.findByUserId(uid);
    }

    // for testing only, not used in the actual app
    @GetMapping("/bookmarks")
    public Iterable<Bookmark> getAllBookmarks() {

        return bookmarkRepository.findAll();
    }

    @PostMapping("/mybookmarks")
    public Bookmark addBookmark(@RequestBody Bookmark bookmark){
        bookmarkRepository.save(bookmark); //TODO - add error/format checking
        return bookmark;
    }

    @DeleteMapping("/bookmark")
    public void deleteBookmark(@RequestParam int bid) {
        Optional<Bookmark> bookmark = bookmarkRepository.findById(bid);
        if(!bookmark.isEmpty())
            bookmarkRepository.delete(bookmark.get());
    }
}
