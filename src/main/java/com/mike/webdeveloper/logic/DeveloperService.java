package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.domain.Developer;
import com.mike.webdeveloper.domain.DeveloperData;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;


@Service
public class DeveloperService {
    private final DeveloperRepository developerRepository;
    private final CityService cityService;

    public DeveloperService(DeveloperRepository developerRepository, CityService cityService) {
        this.developerRepository = developerRepository;
        this.cityService = cityService;
    }

    public List<DeveloperData> getDeveloperById(DeveloperSearchFilter filter) {
        List<DeveloperData> developers = new ArrayList<>();
        if (developerRepository.findById(filter.getId()).isPresent()) {
            developerRepository.findById(filter.getId()).ifPresent(developer -> developers.add(
                    new DeveloperData(
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
                    )
            ));
        } else {
            throw new NoSuchElementException();
        }
        return developers;
    }

    public DeveloperData getDeveloperByCode(DeveloperSearchFilter filter) {
        if (developerRepository.findByCodeAndDeletedAtIsNull(filter.getCode()).isPresent()) {
            return developerRepository.findByCodeAndDeletedAtIsNull(filter.getCode())
                    .map(developer -> new DeveloperData(
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
                    )).orElseThrow(NoSuchElementException::new);
        } else {
            throw new NoSuchElementException();
        }
    }

    public Long createDeveloper(DeveloperData developerData) {
        Developer developer = new Developer();
        developer.setName(developerData.getName());
        developer.setAddressCountry(developerData.getAddressCountry());
        developer.setAddressStreet(developerData.getAddressStreet());
        developer.setAddressBuildingNumber(developerData.getAddressBuildingNumber());
        developer.setAddressFlatNumber(developerData.getAddressFlatNumber());
        developer.setAddressPostalCode(developerData.getAddressPostalCode());
        developer.setTelephoneNumber(developerData.getTelephoneNumber());
        developer.setFaxNumber(developerData.getFaxNumber());
        developer.setEmail(developerData.getEmail());
        developer.setTaxIdentificationNumber(developerData.getTaxIdentificationNumber());
        developer.setDeveloperCity(cityService.getCityById(developerData.getCityId()));
        developer.setLogoUrl(developerData.getLogoUrl());
        developer.setCode(developerData.getCode());
        developer.setCreatedAt(LocalDateTime.now());
        developer.setUpdatedAt(LocalDateTime.now());
        developerRepository.save(developer);
        return new DeveloperData(developer).getId();
    }

    public Long updateDeveloper(Long id, DeveloperData developerData) {
        Developer developer = developerRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Developer with id " + id + " not found"));
        developer.setName(developerData.getName());
        developer.setAddressCountry(developerData.getAddressCountry());
        developer.setAddressStreet(developerData.getAddressStreet());
        developer.setAddressBuildingNumber(developerData.getAddressBuildingNumber());
        developer.setAddressFlatNumber(developerData.getAddressFlatNumber());
        developer.setAddressPostalCode(developerData.getAddressPostalCode());
        developer.setTelephoneNumber(developerData.getTelephoneNumber());
        developer.setFaxNumber(developerData.getFaxNumber());
        developer.setEmail(developerData.getEmail());
        developer.setTaxIdentificationNumber(developerData.getTaxIdentificationNumber());
        developer.setDeveloperCity(cityService.getCityById(developerData.getCityId()));
        developer.setLogoUrl(developerData.getLogoUrl());
        developer.setCode(developerData.getCode());
        developer.setUpdatedAt(LocalDateTime.now());
        developerRepository.save(developer);
        return new DeveloperData(developer).getId();
    }

    public List<Developer> getAllActiveDevelopers() {
        return developerRepository.findByDeletedAtIsNull();
    }

    public void softDeleteDeveloper(Long id) {
        Developer developer = developerRepository.findById(id).orElseThrow(() -> new RuntimeException("Developer not found"));
        developer.setDeletedAt(LocalDateTime.now());
        developerRepository.save(developer);
    }

}
