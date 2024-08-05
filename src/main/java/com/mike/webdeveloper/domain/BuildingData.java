package com.mike.webdeveloper.domain;

public class BuildingData {

    private Long id;
    private String name;
    private String addressCountry;
    private String addressStreet;
    private String addressBuildingNumber;
    private String addressPostalCode;

    public BuildingData(Building building) {
        this.id = building.getId();
        this.name = building.getName();
        this.addressCountry = building.getAddressCountry();
        this.addressStreet = building.getAddressStreet();
        this.addressBuildingNumber = building.getAddressBuildingNumber();
        this.addressPostalCode = building.getAddressPostalCode();
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
    public String getAddressPostalCode() {
        return addressPostalCode;
    }
    public void setAddressPostalCode(String addressPostalCode) {
        this.addressPostalCode = addressPostalCode;
    }

}
