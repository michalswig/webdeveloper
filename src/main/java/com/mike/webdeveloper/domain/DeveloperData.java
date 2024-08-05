package com.mike.webdeveloper.domain;

import java.time.LocalDateTime;

public class DeveloperData {

    private Long id;
    private String name;
    private String addressCountry;
    private String addressStreet;
    private String addressBuildingNumber;
    private String addressFlatNumber;
    private String addressPostalCode;
    private String telephoneNumber;
    private String faxNumber;
    private String email;
    private String taxIdentificationNumber;
    private Long cityId;
    private String logoUrl;
    private String code;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;

    public DeveloperData() {
    }

    public DeveloperData(Long id, String name, String addressCountry, String addressStreet, String addressBuildingNumber, String addressFlatNumber, String addressPostalCode, String telephoneNumber, String faxNumber, String email, String taxIdentificationNumber, Long cityId, String logoUrl, String code, LocalDateTime createdAt, LocalDateTime updatedAt, LocalDateTime deletedAt) {
        this.id = id;
        this.name = name;
        this.addressCountry = addressCountry;
        this.addressStreet = addressStreet;
        this.addressBuildingNumber = addressBuildingNumber;
        this.addressFlatNumber = addressFlatNumber;
        this.addressPostalCode = addressPostalCode;
        this.telephoneNumber = telephoneNumber;
        this.faxNumber = faxNumber;
        this.email = email;
        this.taxIdentificationNumber = taxIdentificationNumber;
        this.cityId = cityId;
        this.logoUrl = logoUrl;
        this.code = code;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public DeveloperData(Developer developer) {
        this.id = developer.getId();
        this.name = developer.getName();
        this.addressCountry = developer.getAddressCountry();
        this.addressStreet = developer.getAddressStreet();
        this.addressBuildingNumber = developer.getAddressBuildingNumber();
        this.addressFlatNumber = developer.getAddressFlatNumber();
        this.addressPostalCode = developer.getAddressPostalCode();
        this.telephoneNumber = developer.getTelephoneNumber();
        this.faxNumber = developer.getFaxNumber();
        this.email = developer.getEmail();
        this.taxIdentificationNumber = developer.getTaxIdentificationNumber();
        this.cityId = developer.getDeveloperCity().getId();
        this.logoUrl = developer.getLogoUrl();
        this.code = developer.getCode();
        this.createdAt = developer.getCreatedAt();
        this.updatedAt = developer.getUpdatedAt();
        this.deletedAt = developer.getDeletedAt();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddressCountry() {
        return addressCountry;
    }

    public void setAddressCountry(String addressCountry) {
        this.addressCountry = addressCountry;
    }

    public String getAddressStreet() {
        return addressStreet;
    }

    public void setAddressStreet(String addressStreet) {
        this.addressStreet = addressStreet;
    }

    public String getAddressBuildingNumber() {
        return addressBuildingNumber;
    }

    public void setAddressBuildingNumber(String addressBuildingNumber) {
        this.addressBuildingNumber = addressBuildingNumber;
    }

    public String getAddressFlatNumber() {
        return addressFlatNumber;
    }

    public void setAddressFlatNumber(String addressFlatNumber) {
        this.addressFlatNumber = addressFlatNumber;
    }

    public String getAddressPostalCode() {
        return addressPostalCode;
    }

    public void setAddressPostalCode(String addressPostalCode) {
        this.addressPostalCode = addressPostalCode;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getFaxNumber() {
        return faxNumber;
    }

    public void setFaxNumber(String faxNumber) {
        this.faxNumber = faxNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTaxIdentificationNumber() {
        return taxIdentificationNumber;
    }

    public void setTaxIdentificationNumber(String taxIdentificationNumber) {
        this.taxIdentificationNumber = taxIdentificationNumber;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public LocalDateTime getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(LocalDateTime deletedAt) {
        this.deletedAt = deletedAt;
    }

}