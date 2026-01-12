package com.prince.Drive.BE.Repository;

import com.prince.Drive.BE.Entity.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<FileEntity , Long> {
}
