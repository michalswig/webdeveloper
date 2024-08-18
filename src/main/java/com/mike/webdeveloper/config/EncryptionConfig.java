package com.mike.webdeveloper.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EncryptionConfig {
    @Value("${aes}")
    private String aes;
    @Value("${aes.gcm.no.padding}")
    private String aesGcmNoPadding;
    @Value("${aes.key}")
    private String key;
    @Value("${aes.gcm.iv.length}")
    private int gcmIVLength;
    @Value("${aes.gcm.tag.length}")
    private int gcmTagLength;

    public String getAes() {
        return aes;
    }

    public String getAesGcmNoPadding() {
        return aesGcmNoPadding;
    }

    public String getKey() {
        return key;
    }

    public int getGcmIVLength() {
        return gcmIVLength;
    }

    public int getGcmTagLength() {
        return gcmTagLength;
    }

}