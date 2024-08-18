package com.mike.webdeveloper;

import java.util.List;

public class CitiesGetResponse {
    List<CityGetResponse> cities;

    public CitiesGetResponse(List<CityGetResponse> cities) {
        this.cities = cities;
    }

    public List<CityGetResponse> getCities() {
        return cities;
    }

    public void setCities(List<CityGetResponse> cities) {
        this.cities = cities;
    }
}
