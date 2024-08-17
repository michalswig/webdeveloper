package com.mike.webdeveloper;

import com.mike.webdeveloper.config.ApplicationConfig;
import com.mike.webdeveloper.domain.Developer;
import com.mike.webdeveloper.domain.DeveloperData;
import com.mike.webdeveloper.logic.DeveloperSearchFilter;
import com.mike.webdeveloper.logic.DeveloperService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/developers/")
public class DeveloperEndpoint {

    private final DeveloperService developerService;
    private final ApplicationConfig applicationConfig;

    public DeveloperEndpoint(DeveloperService developerService,
                             ApplicationConfig applicationConfig) {
        this.developerService = developerService;
        this.applicationConfig = applicationConfig;
    }

    @GetMapping("{id}")
    public DevelopersGetResponse getDeveloperById(@PathVariable Long id) {
        return new DevelopersGetResponse(
                ConverterToResponse.developersDataToResponse(
                        developerService.getDeveloperById(new DeveloperSearchFilter(id))
                ));
    }

    @GetMapping("code")
    public DevelopersGetResponse getDeveloperByCode() {
        return new DevelopersGetResponse(
                ConverterToResponse.developerDataToResponse(
                        developerService.getDeveloperByCode(
                                new DeveloperSearchFilter(applicationConfig.getSystemCode())
                        )
                ));
    }

    @GetMapping
    public DevelopersGetResponse getAllActiveDevelopers() {
        List<Developer> allActiveDevelopers = developerService.getAllActiveDevelopers();
        return new DevelopersGetResponse(
                getDeveloperGetResponses(allActiveDevelopers)
        );
    }

    @PostMapping("register")
    public ResponseEntity<Long> registerDeveloper(@RequestBody DeveloperData developerData) {
        Long developerId = developerService.createDeveloper(developerData);
        return ResponseEntity.status(HttpStatus.CREATED).body(developerId);
    }

    @PutMapping("{id}")
    public ResponseEntity<Long> updateDeveloper(@PathVariable Long id, @RequestBody DeveloperData developerData) {
        Long developerId = developerService.updateDeveloper(id, developerData);
        return ResponseEntity.status(HttpStatus.OK).body(developerId);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> softDeleteDeveloper(@PathVariable Long id) {
        developerService.softDeleteDeveloper(id);
        return ResponseEntity.noContent().build();
    }

    private static List<DeveloperGetResponse> getDeveloperGetResponses(List<Developer> allActiveDevelopers) {
        return allActiveDevelopers.stream()
                .map(developer -> new DeveloperGetResponse(
                        developer.getId(),
                        developer.getName(),
                        developer.getAddressCountry(),
                        developer.getAddressStreet(),
                        developer.getAddressBuildingNumber(),
                        developer.getAddressFlatNumber(),
                        developer.getAddressPostalCode(),
                        developer.getTelephoneNumber(),
                        developer.getFaxNumber(),
                        developer.getEmail(),
                        developer.getTaxIdentificationNumber(),
                        developer.getDeveloperCity().getId(),
                        developer.getLogoUrl(),
                        developer.getCode(),
                        developer.getCreatedAt(),
                        developer.getUpdatedAt(),
                        developer.getDeletedAt()
                ))
                .toList();
    }

}
