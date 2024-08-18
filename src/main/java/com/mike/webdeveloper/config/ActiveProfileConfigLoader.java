package com.mike.webdeveloper.config;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class ActiveProfileConfigLoader {
    private final String activeProfile;
    private final Logger logger = LoggerFactory.getLogger(ActiveProfileConfigLoader.class);

    public ActiveProfileConfigLoader(@Value("${spring.profiles.active:}") String activeProfiles) {
        this.activeProfile = activeProfiles;
    }

    private String getActiveProfile() {
        return activeProfile;
    }

    @PostConstruct
    private void checkActiveProfile() {
        if (getActiveProfile().isEmpty()) {
            logger.warn("No active profile set, running with default configuration");
        } else {
            logger.info("Running with active profile: {}", getActiveProfile());
        }
    }

    public String getActiveProfilePropertiesFileName() {
        return "application-" + getActiveProfile() + ".properties";
    }

}