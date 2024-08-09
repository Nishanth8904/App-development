package com.example.demo.model;

@Entity
@Getter
@Setter
public class StudentApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String fatherName;
    private String motherName;
    private String email;
    private String phone;
    private String address;
    private String achievements;
    private double tenthPercent;
    private double twelfthPercent;
    private String course;

    // Getters and Setters
}