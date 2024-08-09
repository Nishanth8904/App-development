package com.example.demo.model;


@Entity
@Table(name = "admins")
@Getter
@Setter
public class Admin {

    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    private String password;
   
}
