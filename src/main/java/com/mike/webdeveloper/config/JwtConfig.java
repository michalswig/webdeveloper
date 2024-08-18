package com.mike.webdeveloper.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtConfig {
    @Value("${jwt.secret}")
    private String jwtSecret;
    @Value("${jwt.expiration}")
    private long jwtExpirationInMillis;

    public String getJwtSecret() {
        return jwtSecret;
    }
    public long getJwtExpirationInMillis() {
        return jwtExpirationInMillis;
    }

}
