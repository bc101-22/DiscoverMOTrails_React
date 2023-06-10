package com.discovermotrails.securitybackend.repository;

import com.discovermotrails.securitybackend.model.Trail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrailRepository extends CrudRepository<Trail, Integer> {
//    List<Trail> findById(int id);
}