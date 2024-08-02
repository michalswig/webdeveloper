package com.mike.webdeveloper.domain;

public class CityData {
    private Long id;
    private String name;
    private Long voivodeshipId;

    public CityData(Long id, String name, Long voivodeshipId) {
        this.id = id;
        this.name = name;
        this.voivodeshipId = voivodeshipId;
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
    public void setVoivodeshipId(Long voivodeshipId) {
        this.voivodeshipId = voivodeshipId;
    }

}
