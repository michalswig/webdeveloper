package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.config.ApplicationConfig;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@Service
public class PropertyConfigService {

    private final ApplicationConfig applicationConfig;

    public PropertyConfigService(ApplicationConfig applicationConfig) {
        this.applicationConfig = applicationConfig;
    }

    public Map<String, String> getFilteredConfigProperties(Properties properties) {
        Map<String, String> filteredProperties = new HashMap<>();
        properties.stringPropertyNames()
                .stream()
                .filter(key -> key.startsWith(applicationConfig.getSystemPrefix()))
                .forEach(key -> filteredProperties.put(key, properties.getProperty(key)));
        return filteredProperties;
    }

}
