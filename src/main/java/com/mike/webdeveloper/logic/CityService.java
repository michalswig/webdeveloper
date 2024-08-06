package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.config.ApplicationConfig;

import com.mike.webdeveloper.domain.City;
import com.mike.webdeveloper.domain.CityData;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class CityService {
    private final CityRepository cityRepository;
    private final ApplicationConfig applicationConfig;

    public CityService(CityRepository cityRepository, ApplicationConfig applicationConfig) {
        this.cityRepository = cityRepository;
        this.applicationConfig = applicationConfig;
    }

    public List<City> getCities() {
        return cityRepository.findAll();
    }

    public List<CityData> getCitiesByDeveloperCode() {
        return cityRepository.getCitiesByDeveloperCode(applicationConfig.getSystemCode())
                .stream()
                .distinct()
                .map(city -> new CityData(city.getId(), city.getName(), city.getVoivodeship().getId()))
                .collect(Collectors.toList());
    }

    public City getCityById(Long cityId) {
        return cityRepository.findById(cityId)
                .orElseThrow(() -> new NoSuchElementException("City with id " + cityId + " not found"));
    }
}
