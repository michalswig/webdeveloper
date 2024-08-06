package com.mike.webdeveloper.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableCaching
@EnableScheduling
public class ApplicationConfig {

    @Value("${system.code}")
    private String systemCode;

    @Value("${properties.prefix}")
    private String systemPrefix;

    @Value("${system.logoDeveloperEndpoint}")
    private String logoDeveloperEndpoint;

    public String getSystemPrefix() {
        return systemPrefix;
    }

    public String getSystemCode() {
        return systemCode;
    }

    public String getLogoDeveloperEndpoint() {
        return logoDeveloperEndpoint;
    }

}
