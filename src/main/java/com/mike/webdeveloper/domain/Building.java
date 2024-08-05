package com.mike.webdeveloper.domain;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "buildings")
public class Building implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Column(name = "address_country")
    private String addressCountry;
    @Column(name = "address_street")
    private String addressStreet;
    @Column(name = "address_building_number")
    private String addressBuildingNumber;
    @Column(name = "address_postal_code")
    private String addressPostalCode;
    @Column(name = "investment_id")
    private Long investmentId;
    @Column(name = "city_id")
    private Long cityId;
    @Column(name = "create_time")
    private LocalDateTime createdAt;
    @Column(name = "edit_time")
    private LocalDateTime updatedAt;
    @Column(name = "delete_time")
    private LocalDateTime deletedAt;
    @OneToMany(mappedBy = "building")
    List<Premise> premises;
    @ManyToOne
    @JoinColumn(name = "investment_id", insertable = false, updatable = false)
    private Investment investmentBuildings;
    @ManyToOne
    @JoinColumn(name = "city_id", insertable = false, updatable = false)
    private City cityBuildings;

    public Building() {
    }

    public List<Premise> getPremises() {
        return premises;
    }

    public void setPremises(List<Premise> premises) {
        this.premises = premises;
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

    public Long getInvestmentId() {
        return investmentId;
    }

    public void setInvestmentId(Long investmentId) {
        this.investmentId = investmentId;
    }

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public Investment getInvestmentBuildings() {
        return investmentBuildings;
    }

    public void setInvestmentBuildings(Investment investmentBuildings) {
        this.investmentBuildings = investmentBuildings;
    }

    public City getCityBuildings() {
        return cityBuildings;
    }

    public void setCityBuildings(City cityBuildings) {
        this.cityBuildings = cityBuildings;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Building building = (Building) o;
        return Objects.equals(getId(), building.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
