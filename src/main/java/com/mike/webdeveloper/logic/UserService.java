package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.auth.Roles;
import com.mike.webdeveloper.domain.User;
import com.mike.webdeveloper.domain.UserData;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserData getUserDataByLogin(String login) {
        Optional<User> user = userRepository.getUserByLogin(login);
        if (user.isPresent()) {
            return new UserData(user.get());
        } else {
            throw new NoSuchElementException("User with login " + login + " not found");
        }
    }

    public UserData createUser(UserData userData) {
        User user = userData.toUser();
        user.setEncryptedPassword(passwordEncoder.encode(user.getEncryptedPassword()));

        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            Set<Roles> defaultRoles = new HashSet<>();
            defaultRoles.add(Roles.DEVELOPER);
            user.setRoles(defaultRoles);
        }
        userRepository.save(user);
        return new UserData(user);
    }

    public UserData createAdmin(UserData userData) {
        User user = userData.toUser();
        user.setEncryptedPassword(passwordEncoder.encode(user.getEncryptedPassword()));

        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            Set<Roles> defaultRoles = new HashSet<>();
            defaultRoles.add(Roles.ADMIN);
            user.setRoles(defaultRoles);
        }
        userRepository.save(user);
        return new UserData(user);
    }

    public void assignRoleToUser(String login, Roles role) {
        User user = userRepository.getUserByLogin(login).
                orElseThrow(() -> new NoSuchElementException("User with login " + login + " not found"));
        user.getRoles().add(role);
        userRepository.save(user);
    }

}
