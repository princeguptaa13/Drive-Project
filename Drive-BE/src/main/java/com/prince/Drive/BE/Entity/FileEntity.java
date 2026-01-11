package com.prince.Drive.BE.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "files")
public class FileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String name ;
    private Long size ;
    private String type ;
    private Long parentFolderId ;
    private LocalDateTime createdAt ;
}
