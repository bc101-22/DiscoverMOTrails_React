package com.discovermotrails.securitybackend.repository;

import com.discovermotrails.securitybackend.model.Comment;
import com.discovermotrails.securitybackend.model.Trail;
import com.discovermotrails.securitybackend.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {
    List<Comment> findByTrail(Trail trail);

    @Query("SELECT c from Comment c where c.trail.id = :tid")
    List<Comment> findByTrailId(int tid);

    List<Comment> findByUser(User user);
}

