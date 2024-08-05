package com.mike.webdeveloper.domain;

public class InvestmentData {

    private Long id;
    private String name;
    private String description;
    private String addressCountry;
    private String addressStreet;
    private Long developerId;
    private Long cityId;

    public InvestmentData(Long id, String name, String description, String addressCountry, String addressStreet, Long developerId, Long cityId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.addressCountry = addressCountry;
        this.addressStreet = addressStreet;
        this.developerId = developerId;
        this.cityId = cityId;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Long getDeveloperId() {
        return developerId;
    }

    public void setDeveloperId(Long developerId) {
        this.developerId = developerId;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }
}
