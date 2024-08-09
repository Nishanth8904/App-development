package com.example.demo.repository;

import java.util.List;

import com.example.demo.model.StudentApplication;

public interface StudentApplicationRepository extends JpaRepository<StudentApplication, Long> {

    StudentApplication save(StudentApplication application);

    List<StudentApplication> findAll();
}