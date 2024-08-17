package com.mike.webdeveloper;

import com.mike.webdeveloper.domain.PremiseData;
import com.mike.webdeveloper.logic.PremiseSearchFilter;
import com.mike.webdeveloper.logic.PremiseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/premises/")
public class PremiseEndpoint {
    private final PremiseService premiseService;

    public PremiseEndpoint(PremiseService premiseService) {
        this.premiseService = premiseService;
    }

    @GetMapping("investment/{id}/enhancedPremiseData")
    public PremiseAggregatedValuesGetResponse getMinAndMaxTotalPremisePriceByInvestmentId(@PathVariable Long id) {
        return premiseService.findPremisePriceRangeByInvestmentId(id);
    }

    @GetMapping("investment/{id}")
    public PremisesGetResponse getPremisesByInvestmentIdAndSetTranslation(
            @PathVariable Long id,
            @RequestParam(name = "languageCode", required = false) String languageCode) {
        return getPremisesGetResponse(premiseService.getPremiseDataByInvestmentIdAndSetTranslation(
                new PremiseSearchFilter.PremiseSearchFilterBuilder()
                        .withId(id)
                        .withLanguageCode(languageCode)
                        .build()));
    }

    @GetMapping("/dashboard/investment/{id}")
    public PremisesGetResponse getPremisesByInvestmentId(
            @PathVariable Long id) {
        return getPremisesGetResponse(premiseService.getPremiseDataByInvestmentId(
                new PremiseSearchFilter.PremiseSearchFilterBuilder()
                        .withId(id)
                        .build()));
    }

    @GetMapping("{id}")
    public PremisesGetResponse getPremiseById(
            @PathVariable Long id,
            @RequestParam(name = "languageCode", required = false) String languageCode) {
        return getPremisesGetResponse(premiseService.getPremiseDataById(
                new PremiseSearchFilter.PremiseSearchFilterBuilder()
                        .withId(id)
                        .withLanguageCode(languageCode)
                        .build()));
    }

    @PostMapping
    public ResponseEntity<Long> createPremise(@RequestBody PremiseData premiseData) {
        Long premiseId = premiseService.createPremiseData(premiseData);
        return ResponseEntity.status(HttpStatus.CREATED).body(premiseId);
    }

    @PutMapping("{id}")
    public ResponseEntity<Long> updatePremise(@PathVariable Long id, @RequestBody PremiseData premiseData) {
        Long premiseId = premiseService.updatePremise(id, premiseData);
        return ResponseEntity.status(HttpStatus.OK).body(premiseId);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void>  softDeletePremise(@PathVariable Long id) {
        premiseService.softDeletePremise(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    private PremisesGetResponse getPremisesGetResponse(List<PremiseData> premiseService) {
        return new PremisesGetResponse(
                ConverterToResponse.premisesDataToResponse(
                        premiseService
                ));
    }

}