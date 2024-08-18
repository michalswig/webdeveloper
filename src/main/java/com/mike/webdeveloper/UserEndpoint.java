package com.mike.webdeveloper;

import com.mike.webdeveloper.domain.UserData;
import com.mike.webdeveloper.logic.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/")
public class UserEndpoint {
    private final UserService userService;

    public UserEndpoint(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("user/register")
    public ResponseEntity<?> registerUser(@RequestBody UserData userData) {
        UserData user = userService.createUser(userData);
        return ResponseEntity.ok(user);
    }

    @PostMapping("user/registerAdmin")
    public ResponseEntity<?> registerAdmin(@RequestBody UserData userData) {
        UserData user = userService.createAdmin(userData);
        return ResponseEntity.ok(user);
    }

}
