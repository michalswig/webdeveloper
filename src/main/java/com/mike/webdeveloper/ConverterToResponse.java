package com.mike.webdeveloper;

import com.mike.webdeveloper.domain.DeveloperData;
import com.mike.webdeveloper.domain.PremiseData;

import java.util.ArrayList;
import java.util.List;

public final class ConverterToResponse {

    private ConverterToResponse() {
        throw new AssertionError("Cannot instantiate utility class");
    }

    public static List<PremiseGetResponse> premisesDataToResponse(List<PremiseData> premises) {
        List<PremiseGetResponse> premisesGetResponse = new ArrayList<>();
        for (PremiseData list : premises) {
            premisesGetResponse.add(
                    new PremiseGetResponse(
                            list.getId(),
                            list.getType(),
                            list.getNumber(),
                            list.getFloor(),
                            list.getSurfacePerSqMeter(),
                            list.getPricePerSqMeter(),
                            list.getTotalPrice(),
                            list.getNumberOfRooms(),
                            list.getTechnicalStatus(),
                            list.getSalesStatus(),
                            list.getExposure(),
                            list.getBalcony(),
                            list.getGarden(),
                            list.getTerrace(),
                            list.getLoggia(),
                            list.getTechnicalStatusTranslation(),
                            list.getSalesStatusTranslation(),
                            list.getExposureTranslation(),
                            list.getLanguageCode(),
                            list.getBuildingId()
                    )
            );
        }
        return premisesGetResponse;
    }

    public static List<DeveloperGetResponse> developersDataToResponse(List<DeveloperData> developers) {
        List<DeveloperGetResponse> developersGetResponse = new ArrayList<>();
        for (DeveloperData developer : developers) {
            developersGetResponse.add(
                    new DeveloperGetResponse(
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
                            developer.getCityId(),
                            developer.getLogoUrl(),
                            developer.getCode(),
                            developer.getCreatedAt(),
                            developer.getUpdatedAt(),
                            developer.getDeletedAt()
                    )
            );
        }
        return developersGetResponse;
    }


    public static List<DeveloperGetResponse> developerDataToResponse(DeveloperData developer) {
        List<DeveloperGetResponse> developersGetResponse = new ArrayList<>();
        developersGetResponse.add(
                new DeveloperGetResponse(
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
                        developer.getCityId(),
                        developer.getLogoUrl(),
                        developer.getCode(),
                        developer.getCreatedAt(),
                        developer.getUpdatedAt(),
                        developer.getDeletedAt()
                )
        );
        return developersGetResponse;
    }


}
