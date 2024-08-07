package com.mike.webdeveloper;


import com.mike.webdeveloper.domain.AggregatedValues;

import java.math.BigDecimal;

public class PremiseAggregatedValuesGetResponse implements AggregatedValues {
    private final BigDecimal minPrice;
    private final BigDecimal maxPrice;
    private final Integer minRoomCount;
    private final Integer maxRoomCount;
    private final Double minArea;
    private final Double maxArea;

    public PremiseAggregatedValuesGetResponse(AggregatedValues values) {
        this.minPrice = values.getMinPrice();
        this.maxPrice = values.getMaxPrice();
        this.minRoomCount = values.getMinRoomCount();
        this.maxRoomCount = values.getMaxRoomCount();
        this.minArea = values.getMinArea();
        this.maxArea = values.getMaxArea();
    }

    @Override
    public BigDecimal getMinPrice() {
        return minPrice;
    }

    @Override
    public BigDecimal getMaxPrice() {
        return maxPrice;
    }

    @Override
    public Integer getMinRoomCount() {
        return minRoomCount;
    }

    @Override
    public Integer getMaxRoomCount() {
        return maxRoomCount;
    }

    @Override
    public Double getMinArea() {
        return minArea;
    }

    @Override
    public Double getMaxArea() {
        return maxArea;
    }

}
