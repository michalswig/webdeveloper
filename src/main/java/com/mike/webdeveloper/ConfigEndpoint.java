package com.mike.webdeveloper;

import com.mike.webdeveloper.config.ActiveProfileConfigLoader;
import com.mike.webdeveloper.domain.DictionaryData;
import com.mike.webdeveloper.domain.TranslationData;
import com.mike.webdeveloper.logic.PropertyConfigService;
import com.mike.webdeveloper.logic.TranslationDataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

@RestController
@RequestMapping("api/system/")
public class ConfigEndpoint {

    private final ActiveProfileConfigLoader profileConfigLoader;
    private final PropertyConfigService propertyConfigService;
    private final TranslationDataService translationDataService;
    private static final Logger logger = LoggerFactory.getLogger(ConfigEndpoint.class);

    public ConfigEndpoint(ActiveProfileConfigLoader profilesBean,
                          PropertyConfigService propertyService,
                          TranslationDataService translationDataService) {
        this.profileConfigLoader = profilesBean;
        this.propertyConfigService = propertyService;
        this.translationDataService = translationDataService;
    }

    @GetMapping("/{entityId}/{domain}/{key}")
    public ResponseEntity<TranslationGetResponse> getTranslation(
            @PathVariable Integer entityId,
            @PathVariable String domain,
            @PathVariable String key,
            @RequestParam(name = "languageCode", required = false) String languageCode) {
        if (languageCode == null || languageCode.isEmpty()) {
            languageCode = LocaleContextHolder.getLocale().getLanguage();
        }
        return ResponseEntity.ok(translationDataService.getTranslation(new TranslationData(
                entityId,
                languageCode,
                domain,
                key
        )));
    }

    @GetMapping("/dictionary/{domain}/{key}")
    public ResponseEntity<DictionaryGetResponse> getDictionary(
            @PathVariable String domain,
            @PathVariable String key,
            @RequestParam(name = "languageCode", required = false) String languageCode) {
        if (languageCode == null || languageCode.isEmpty()) {
            languageCode = LocaleContextHolder.getLocale().getLanguage();
        }
        return ResponseEntity.ok(translationDataService.getDictionary(new DictionaryData(
                languageCode,
                domain,
                key
        )));
    }

    @GetMapping("config/properties")
    public ResponseEntity<Map<String, String>> getConfiguration() {
        Properties prop = new Properties();
        try (InputStream input = getClass().getClassLoader()
                .getResourceAsStream(profileConfigLoader.getActiveProfilePropertiesFileName())) {
            if (input == null) {
                logger.error("Properties file not found: {}", profileConfigLoader
                        .getActiveProfilePropertiesFileName());
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            }
            prop.load(input);
        } catch (IOException ex) {
            logger.error("Error loading properties file", ex);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok(propertyConfigService.getFilteredConfigProperties(prop));
    }

}