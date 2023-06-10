package com.discovermotrails.securitybackend.controller;

import com.discovermotrails.securitybackend.repository.CommentRepository;
import com.discovermotrails.securitybackend.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("/allcomments")
    public Iterable<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @GetMapping("/comments")
    public Iterable<Comment> getCommentsByTrail(@RequestParam int tid) {

        return commentRepository.findByTrailId(tid);
    }
}
