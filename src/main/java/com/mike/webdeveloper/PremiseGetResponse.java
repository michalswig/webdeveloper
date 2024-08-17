package com.mike.webdeveloper;

import java.math.BigDecimal;

public class PremiseGetResponse {
    private Long id;
    private String type;
    private Integer number;
    private Integer floor;
    private Double surfacePerSqMeter;
    private Double pricePerSqMeter;
    private BigDecimal totalPrice;
    private Integer numberOfRooms;
    private String technicalStatus;
    private String salesStatus;
    private String exposure;
    private Boolean isBalcony;
    private Boolean isGarden;
    private Boolean isTerrace;
    private Boolean isLoggia;
    private String technicalStatusTranslation;
    private String salesStatusTranslation;
    private String exposureTranslation;
    private String languageCode;
    private Long buildingId;


    public PremiseGetResponse(Long id, String type, Integer number, Integer floor, Double surfacePerSqMeter, Double pricePerSqMeter, BigDecimal totalPrice, Integer numberOfRooms, String technicalStatus, String salesStatus, String exposure, Boolean isBalcony, Boolean isGarden, Boolean isTerrace, Boolean isLoggia, String technicalStatusTranslation, String salesStatusTranslation, String exposureTranslation, String languageCode, Long buildingId) {
        this.id = id;
        this.type = type;
        this.number = number;
        this.floor = floor;
        this.surfacePerSqMeter = surfacePerSqMeter;
        this.pricePerSqMeter = pricePerSqMeter;
        this.totalPrice = totalPrice;
        this.numberOfRooms = numberOfRooms;
        this.technicalStatus = technicalStatus;
        this.salesStatus = salesStatus;
        this.exposure = exposure;
        this.isBalcony = isBalcony;
        this.isGarden = isGarden;
        this.isTerrace = isTerrace;
        this.isLoggia = isLoggia;
        this.technicalStatusTranslation = technicalStatusTranslation;
        this.salesStatusTranslation = salesStatusTranslation;
        this.exposureTranslation = exposureTranslation;
        this.languageCode = languageCode;
        this.buildingId = buildingId;
    }

    public Long getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(Long buildingId) {
        this.buildingId = buildingId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Double getSurfacePerSqMeter() {
        return surfacePerSqMeter;
    }

    public void setSurfacePerSqMeter(Double surfacePerSqMeter) {
        this.surfacePerSqMeter = surfacePerSqMeter;
    }

    public Double getPricePerSqMeter() {
        return pricePerSqMeter;
    }

    public void setPricePerSqMeter(Double pricePerSqMeter) {
        this.pricePerSqMeter = pricePerSqMeter;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(Integer numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public String getTechnicalStatus() {
        return technicalStatus;
    }

    public void setTechnicalStatus(String technicalStatus) {
        this.technicalStatus = technicalStatus;
    }

    public String getSalesStatus() {
        return salesStatus;
    }

    public void setSalesStatus(String salesStatus) {
        this.salesStatus = salesStatus;
    }

    public String getExposure() {
        return exposure;
    }

    public void setExposure(String exposure) {
        this.exposure = exposure;
    }

    public Boolean getBalcony() {
        return isBalcony;
    }

    public void setBalcony(Boolean balcony) {
        isBalcony = balcony;
    }

    public Boolean getGarden() {
        return isGarden;
    }

    public void setGarden(Boolean garden) {
        isGarden = garden;
    }

    public Boolean getTerrace() {
        return isTerrace;
    }

    public void setTerrace(Boolean terrace) {
        isTerrace = terrace;
    }

    public Boolean getLoggia() {
        return isLoggia;
    }

    public void setLoggia(Boolean loggia) {
        isLoggia = loggia;
    }

    public String getTechnicalStatusTranslation() {
        return technicalStatusTranslation;
    }

    public void setTechnicalStatusTranslation(String technicalStatusTranslation) {
        this.technicalStatusTranslation = technicalStatusTranslation;
    }

    public String getSalesStatusTranslation() {
        return salesStatusTranslation;
    }

    public void setSalesStatusTranslation(String salesStatusTranslation) {
        this.salesStatusTranslation = salesStatusTranslation;
    }

    public String getExposureTranslation() {
        return exposureTranslation;
    }

    public void setExposureTranslation(String exposureTranslation) {
        this.exposureTranslation = exposureTranslation;
    }

    public String getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }
}
