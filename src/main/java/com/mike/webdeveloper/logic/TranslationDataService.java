package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.DictionaryGetResponse;
import com.mike.webdeveloper.TranslationGetResponse;
import com.mike.webdeveloper.domain.DictionaryData;
import com.mike.webdeveloper.domain.Translation;
import com.mike.webdeveloper.domain.TranslationData;
import org.springframework.stereotype.Service;

@Service
public class TranslationDataService {

    private final TranslationDataRepository translationDataRepository;

    public TranslationDataService(TranslationDataRepository translationDataRepository) {
        this.translationDataRepository = translationDataRepository;
    }

    public TranslationGetResponse getTranslation(TranslationData translationRequest) {
        return translationDataRepository.findByEntityIdAndLanguageCodeAndDomainAndKey(
                        translationRequest.getEntityId(),
                        translationRequest.getLanguageCode(),
                        translationRequest.getDomain(),
                        translationRequest.getKey()
                ).map(this::convertToData)
                .map(translationData -> new TranslationGetResponse(translationData.getValue()))
                .orElseGet(() -> new TranslationGetResponse("Translation not found"));
    }

    public DictionaryGetResponse getDictionary(DictionaryData dictionaryData) {
        return translationDataRepository.findByLanguageCodeAndDomainAndKey(
                        dictionaryData.getLanguageCode(),
                        dictionaryData.getDomain(),
                        dictionaryData.getKey()
                ).map(this::convertToData)
                .map(translationData -> new DictionaryGetResponse(translationData.getValue()))
                .orElseGet(() -> new DictionaryGetResponse("Dictionary not found"));
    }

    private TranslationData convertToData(Translation translation) {
        return new TranslationData(
                translation.getEntityId(),
                translation.getLanguageCode(),
                translation.getDomain(),
                translation.getKey(),
                translation.getValue()
        );
    }


}
