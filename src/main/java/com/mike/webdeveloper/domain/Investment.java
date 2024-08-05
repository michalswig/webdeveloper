package com.mike.webdeveloper.domain;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "investments")
public class Investment implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    @Column(name = "address_country")
    private String addressCountry;
    @Column(name = "address_street")
    private String addressStreet;
    @Column(name = "developer_id", insertable = false, updatable = false)
    private Long developerId;
    @Column(name = "city_id", insertable = false, updatable = false)
    private Long cityId;
    @Column(name = "create_time")
    private LocalDateTime createdAt;
    @Column(name = "edit_time")
    private LocalDateTime updatedAt;
    @Column(name = "delete_time")
    private LocalDateTime deletedAt;
    @ManyToOne
    @JoinColumn(name = "developer_id", referencedColumnName = "id")
    private Developer developer;
    @ManyToOne
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    private City investmentCity;

    @OneToMany(mappedBy = "investmentBuildings")
    private Set<Building> buildings;

    public Investment() {
    }

    public Set<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(Set<Building> buildings) {
        this.buildings = buildings;
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

    public Developer getDeveloper() {
        return developer;
    }

    public void setDeveloper(Developer developer) {
        this.developer = developer;
    }

    public City getInvestmentCity() {
        return investmentCity;
    }

    public void setInvestmentCity(City investmentCity) {
        this.investmentCity = investmentCity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Investment that = (Investment) o;
        return Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
