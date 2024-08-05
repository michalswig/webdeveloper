package com.mike.webdeveloper.domain;


import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "cities")
public class City implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Column(name = "voivodeship_id")
    private Long voivodeshipId;
    @Column(name = "create_time")
    private LocalDateTime createdAt;
    @Column(name = "edit_time")
    private LocalDateTime updatedAt;
    @Column(name = "delete_time")
    private LocalDateTime deletedAt;
    @ManyToOne
    @JoinColumn(name = "voivodeship_id", insertable = false, updatable = false)
    private Voivodeship voivodeship;
    @OneToMany(mappedBy = "investmentCity")
    private Set<Investment> investments;
    @OneToMany(mappedBy = "developerCity")
    private Set<Developer> developers;
    @OneToMany(mappedBy = "cityBuildings")
    private Set<Building> buildings;

    public City() {
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

    public Long getVoivodeshipId() {
        return voivodeshipId;
    }

    public Voivodeship getVoivodeship() {
        return voivodeship;
    }

    public void setVoivodeshipId(Long voivodeshipId) {
        this.voivodeshipId = voivodeshipId;
    }

    public void setVoivodeship(Voivodeship voivodeship) {
        this.voivodeship = voivodeship;
    }

    public Set<Investment> getInvestments() {
        return investments;
    }

    public void setInvestments(Set<Investment> investments) {
        this.investments = investments;
    }

    public Set<Developer> getDevelopers() {
        return developers;
    }

    public void setDevelopers(Set<Developer> developers) {
        this.developers = developers;
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

    public Set<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(Set<Building> buildings) {
        this.buildings = buildings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        City city = (City) o;
        return Objects.equals(getId(), city.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
