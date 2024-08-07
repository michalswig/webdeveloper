package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.DictionaryGetResponse;
import com.mike.webdeveloper.PremiseAggregatedValuesGetResponse;
import com.mike.webdeveloper.domain.DictionaryData;
import com.mike.webdeveloper.domain.Premise;
import com.mike.webdeveloper.domain.PremiseData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PremiseService {

    private static final String TECHNICAL_STATUS = "premises.technicalStatus";
    private static final String SALES_STATUS = "premises.salesStatus";
    private static final String EXPOSURE = "premises.exposure";

    private final PremiseRepository premiseRepository;
    private final TranslationDataService translationDataService;

    private final Logger logger = LoggerFactory.getLogger(PremiseService.class);

    public PremiseService(PremiseRepository premiseRepository, TranslationDataService translationDataService) {
        this.premiseRepository = premiseRepository;
        this.translationDataService = translationDataService;
    }

    public void generateAndSavePremise(){
        for(int i = 0; i < 10000; i++){
            Premise premise = new Premise();
            premise.setType("a");
            premise.setNumber(1);
            premise.setFloor(1);
            premise.setSurfacePerSqMeter(30.00);
            premise.setPricePerSqMeter(20000.00);
            premise.setTotalPrice(BigDecimal.valueOf(600000.00));
            premise.setNumberOfRooms(3);
            premise.setTechnicalStatus("c");
            premise.setSalesStatus("a");
            premise.setExposure("w");
            premise.setBalcony(true);
            premise.setGarden(true);
            premise.setTerrace(false);
            premise.setLoggia(false);
            premise.setBuildingId(1L);
            premiseRepository.save(premise);
        }
    }

    public PremiseAggregatedValuesGetResponse findPremisePriceRangeByInvestmentId(Long id) {
        return new PremiseAggregatedValuesGetResponse(premiseRepository.findPremisePriceRangeByInvestmentId(id));
    }

    public List<PremiseData> getPremiseDataById(PremiseSearchFilter filter) {
        return premiseRepository.findById(filter.getId()).stream()
                .map(PremiseData::new)
                .map(premiseData -> setTranslationsAndLanguageCodeToPremiseData(premiseData, filter.getLanguageCode()))
                .toList();
    }

    public List<PremiseData> getPremiseDataByInvestmentId(PremiseSearchFilter filter) {
        return premiseRepository.findAllByInvestmentId(filter.getId()).stream()
                .map(PremiseData::new)
                .map(premiseData -> setTranslationsAndLanguageCodeToPremiseData(premiseData, filter.getLanguageCode()))
                .toList();
    }

    public Long createPremiseData(PremiseData premiseData) {
        Premise premise = new Premise(
                premiseData.getId(),
                premiseData.getType(),
                premiseData.getNumber(),
                premiseData.getFloor(),
                premiseData.getSurfacePerSqMeter(),
                premiseData.getPricePerSqMeter(),
                premiseData.getTotalPrice(),
                premiseData.getNumberOfRooms(),
                premiseData.getTechnicalStatus(),
                premiseData.getSalesStatus(),
                premiseData.getExposure(),
                premiseData.getBalcony(),
                premiseData.getGarden(),
                premiseData.getTerrace(),
                premiseData.getLoggia(),
                premiseData.getBuildingId()
        );

        Premise savedPremise = premiseRepository.save(premise);
        return savedPremise.getId();
    }

    public Long updatePremise(Long id, PremiseData premiseData) {
        Premise premise = premiseRepository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Premise with id " + id + " not found")
        );
        premise.setType(premiseData.getType());
        premise.setNumber(premiseData.getNumber());
        premise.setFloor(premiseData.getFloor());
        premise.setSurfacePerSqMeter(premiseData.getSurfacePerSqMeter());
        premise.setPricePerSqMeter(premiseData.getPricePerSqMeter());
        premise.setTotalPrice(premiseData.getTotalPrice());
        premise.setNumberOfRooms(premiseData.getNumberOfRooms());
        premise.setTechnicalStatus(premiseData.getTechnicalStatus());
        premise.setSalesStatus(premiseData.getSalesStatus());
        premise.setExposure(premiseData.getExposure());
        premise.setBalcony(premiseData.getBalcony());
        premise.setGarden(premiseData.getGarden());
        premise.setTerrace(premiseData.getTerrace());
        premise.setLoggia(premiseData.getLoggia());
        premise.setBuildingId(premiseData.getBuildingId());

        return new PremiseData(premiseRepository.save(premise)).getId();

    }

    public PremiseData setTranslationsAndLanguageCodeToPremiseData(PremiseData premiseData, String languageCode) {
        premiseData.setTechnicalStatusTranslation(fetchTranslation(languageCode, TECHNICAL_STATUS, premiseData.getTechnicalStatus()));
        premiseData.setSalesStatusTranslation(fetchTranslation(languageCode, SALES_STATUS, premiseData.getSalesStatus()));
        premiseData.setExposureTranslation(fetchTranslation(languageCode, EXPOSURE, premiseData.getExposure()));
        premiseData.setLanguageCode(languageCode);
        return premiseData;
    }

    public String fetchTranslation(String languageCode, String domain, String key) {
        try {
            DictionaryGetResponse response = translationDataService.getDictionary(new DictionaryData(languageCode, domain, key));
            return Optional.ofNullable(response.getTranslation()).orElse("Default Translation");
        } catch (NoSuchElementException e) {
            logger.error("Translation not found for domain: {} and key: {}", domain, key, e);
            return "Default Translation";
        }
    }

    public void softDeletePremise(Long id) {
        Premise premise = premiseRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Premise not found"));
        premise.setDeletedAt(LocalDateTime.now());
    }

}
