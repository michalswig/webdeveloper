package com.mike.webdeveloper;

import com.mike.webdeveloper.config.EncryptionConfig;
import com.mike.webdeveloper.config.JwtConfig;
import com.mike.webdeveloper.domain.UserData;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.bouncycastle.openssl.EncryptionException;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Cipher;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/auth/")
public class AuthenticationEndpoint {

    private final AuthenticationManager authenticationManager;
    private final JwtConfig jwtConfig;
    private final EncryptionConfig encryptionConfig;
    private final Logger log = org.slf4j.LoggerFactory.getLogger(AuthenticationEndpoint.class);

    public AuthenticationEndpoint(AuthenticationManager authenticationManager,
                                  JwtConfig jwtConfig,
                                  EncryptionConfig encryptionConfig) {
        this.authenticationManager = authenticationManager;
        this.jwtConfig = jwtConfig;
        this.encryptionConfig = encryptionConfig;
    }

    @GetMapping("encryption")
    public ResponseEntity<String> getEncryptionKey() {
        return ResponseEntity.ok(encryptionConfig.getKey());
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody UserData user) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getLogin(), decrypt(user.getEncryptedPassword()))
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String roles = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.joining(","));

            long now = System.currentTimeMillis();
            String jwt = Jwts.builder()
                    .setSubject(user.getLogin())
                    .claim("roles", roles)
                    .setIssuedAt(new Date(now))
                    .setExpiration(new Date(now + jwtConfig.getJwtExpirationInMillis()))
                    .signWith(SignatureAlgorithm.HS256, jwtConfig.getJwtSecret())
                    .compact();

            Map<String, Object> response = new HashMap<>();
            response.put("token", jwt);
            return ResponseEntity.ok().body(response);

        } catch (AuthenticationException e) {
            return createErrorResponse(HttpStatus.UNAUTHORIZED, "Unauthorized", "Invalid username or password");
        } catch (EncryptionException e) {
            log.error("Error during decryption", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private ResponseEntity<Map<String, String>> createErrorResponse(HttpStatus status, String error, String message) { // Added this method
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", error);
        errorResponse.put("message", message);
        return ResponseEntity.status(status).contentType(MediaType.APPLICATION_JSON).body(errorResponse);
    }

    private String decrypt(String encryptedData) throws EncryptionException {
        try {
            byte[] encryptedBytesWithIv = Base64.getDecoder().decode(encryptedData);
            byte[] iv = Arrays.copyOfRange(encryptedBytesWithIv, 0, encryptionConfig.getGcmIVLength()); // Updated this line
            byte[] encryptedBytes = Arrays.copyOfRange(encryptedBytesWithIv, encryptionConfig.getGcmIVLength(), encryptedBytesWithIv.length); // Updated this line

            Cipher cipher = Cipher.getInstance(encryptionConfig.getAesGcmNoPadding());
            GCMParameterSpec gcmParameterSpec = new GCMParameterSpec(encryptionConfig.getGcmTagLength() * 8, iv);
            SecretKeySpec secretKeySpec = new SecretKeySpec(Base64.getDecoder().decode(encryptionConfig.getKey()), encryptionConfig.getAes());
            cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, gcmParameterSpec);

            byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
            return new String(decryptedBytes, StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new EncryptionException("Error while decrypting", e);
        }
    }
}
