package com.mike.webdeveloper.domain;

import jakarta.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "premises")
public class Premise implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String type;
    private Integer number;
    private Integer floor;
    @Column(name = "surface_sq_m")
    private Double surfacePerSqMeter;
    @Column(name = "price_of_sq_m")
    private Double pricePerSqMeter;
    @Column(name = "price_total")
    private BigDecimal totalPrice;
    @Column(name = "number_of_rooms")
    private Integer numberOfRooms;
    @Column(name = "technical_status")
    private String technicalStatus;
    @Column(name = "sales_status")
    private String salesStatus;
    private String exposure;
    @Column(name = "is_balcony")
    private Boolean isBalcony;
    @Column(name = "is_garden")
    private Boolean isGarden;
    @Column(name = "is_terrace")
    private Boolean isTerrace;
    @Column(name = "is_loggia")
    private Boolean isLoggia;
    @Column(name = "building_id")
    private Long buildingId;
    @Column(name = "create_time")
    private LocalDateTime createdAt;
    @Column(name = "edit_time")
    private LocalDateTime updatedAt;
    @Column(name = "delete_time")
    private LocalDateTime deletedAt;
    @ManyToOne
    @JoinColumn(name = "building_id", insertable = false, updatable = false)
    private Building building;

    public Premise() {
    }

    public Premise(Long id, String type, Integer number, Integer floor, Double surfacePerSqMeter, Double pricePerSqMeter, BigDecimal totalPrice, Integer numberOfRooms, String technicalStatus, String salesStatus, String exposure, Boolean isBalcony, Boolean isGarden, Boolean isTerrace, Boolean isLoggia, Long buildingId) {
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
        this.buildingId = buildingId;
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

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
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


    public Long getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(Long buildingId) {
        this.buildingId = buildingId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Premise)) return false;
        Premise that = (Premise) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getType(), that.getType()) && Objects.equals(getNumber(), that.getNumber());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getType(), getNumber());
    }
}