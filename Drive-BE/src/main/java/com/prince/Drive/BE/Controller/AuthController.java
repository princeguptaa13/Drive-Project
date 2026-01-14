package com.prince.Drive.BE.Controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/me")
    public Object me(@AuthenticationPrincipal OAuth2User user) {
        if (user == null) {
            return null; // or ResponseEntity.status(401).build();
        }
        return user.getAttributes();
    }

}
