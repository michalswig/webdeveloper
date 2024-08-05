package com.mike.webdeveloper.domain;

import java.math.BigDecimal;

public interface AggregatedValues {
    BigDecimal getMinPrice();
    BigDecimal getMaxPrice();
    Integer getMinRoomCount();
    Integer getMaxRoomCount();
    Double getMinArea();
    Double getMaxArea();
}
