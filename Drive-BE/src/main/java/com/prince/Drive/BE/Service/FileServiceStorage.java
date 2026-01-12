package com.prince.Drive.BE.Service;

import com.prince.Drive.BE.Entity.FileEntity;
import com.prince.Drive.BE.Repository.FileRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileServiceStorage {

    @Value("${file.upload.dir}")
    private String uploadDir ;

    private final FileRepository fileRepository ;

    public FileServiceStorage(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public String saveFile(MultipartFile file , Long parenFolderId) throws IOException {
        Path uploadPath = Paths.get(uploadDir);
        if(!Files.exists(uploadPath)){
            Files.createDirectories(uploadPath);
        }

        //filename
        String fileName = file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);

        Files.copy(file.getInputStream() , filePath , StandardCopyOption.REPLACE_EXISTING);

        //metadata store in DB
        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(fileName);
        fileEntity.setPath(filePath.toString());
        fileEntity.setSize(file.getSize());
        fileEntity.setType("file");
        fileEntity.setParentFolderId(parenFolderId);
        fileEntity.setCreatedAt(LocalDateTime.now());

        fileRepository.save(fileEntity);

        return "File updated successfully !" ;
    }

    public List<FileEntity> getFilesInFolder(Long parentFolderId){
        if(parentFolderId == null){
            return fileRepository.findAll()
                    .stream()
                    .filter(f -> f.getParentFolderId() == null)
                    .collect(Collectors.toList());
        }
        else{
            return fileRepository.findAll()
                    .stream()
                    .filter(f -> parentFolderId.equals(f.getParentFolderId()))
                    .collect(Collectors.toList());
        }
    }
    public FileEntity getFileById(Long id){
        return fileRepository.findById(id).orElseThrow(()->new RuntimeException("File Not Found"));
    }

    public void deleteById(Long id){
        fileRepository.deleteById(id);
    }
}
