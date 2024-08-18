package com.mike.webdeveloper;

import com.mike.webdeveloper.logic.CityService;
import com.mike.webdeveloper.logic.InvestmentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("api/")
public class InvestmentEndpoint {
    private final InvestmentService investmentService;
    private final CityService cityService;

    public InvestmentEndpoint(InvestmentService investmentService, CityService cityService) {
        this.investmentService = investmentService;
        this.cityService = cityService;
    }

    @GetMapping("cities_by_developer")
    public CitiesGetResponse getCitiesResponse() {
        return new CitiesGetResponse(
                cityService.getCitiesByDeveloperCode()
                        .stream()
                        .map(city -> new CityGetResponse(
                                city.getId(),
                                city.getName(),
                                city.getVoivodeshipId()
                        ))
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("cities")
    public CitiesGetResponse getAllCitiesResponse() {
        return new CitiesGetResponse(
                cityService.getCities()
                        .stream()
                        .map(city -> new CityGetResponse(
                                city.getId(),
                                city.getName(),
                                city.getVoivodeshipId()
                        ))
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("citiesNamesByDeveloperCode")
    public CitiesGetResponse getCitiesNamesByDeveloperCode() {
        return new CitiesGetResponse(
                investmentService.getInvestmentCitiesByDeveloperCode()
                        .stream()
                        .map(city -> new CityGetResponse(
                                null,
                                city,
                                null
                        ))
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("investments")
    public InvestmentsGetResponse getInvestmentsResponse() {
        return new InvestmentsGetResponse(
                investmentService.getInvestmentsByDeveloperCode()
                        .stream()
                        .map(investment -> new InvestmentGetResponse(
                                investment.getId(),
                                investment.getName(),
                                investment.getDescription(),
                                investment.getAddressCountry(),
                                investment.getAddressStreet(),
                                investment.getDeveloperId(),
                                investment.getCityId()
                        ))
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("investmentByPremiseId/{id}")
    public InvestmentsGetResponse getInvestmentByPremiseId(@PathVariable Long id) {
        return new InvestmentsGetResponse(
                investmentService.getInvestmentsByPremiseId(id)
                        .stream()
                        .map(investment -> new InvestmentGetResponse(
                                investment.getId(),
                                investment.getName(),
                                investment.getDescription(),
                                investment.getAddressCountry(),
                                investment.getAddressStreet(),
                                investment.getDeveloperId(),
                                investment.getCityId()
                        ))
                        .collect(Collectors.toList())
        );
    }

}
