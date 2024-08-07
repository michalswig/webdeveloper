package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.domain.AggregatedValues;
import com.mike.webdeveloper.domain.Premise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface PremiseRepository extends JpaRepository<Premise, Long> {

    @Query("SELECT p FROM Premise p WHERE p.building.investmentBuildings.id = :id")
    List<Premise> findAllByInvestmentId(@Param("id") Long id);

    @Query("SELECT MIN(p.totalPrice) AS minPrice, MAX(p.totalPrice) AS maxPrice, " +
            "MIN(p.numberOfRooms) as minRoomCount, MAX(p.numberOfRooms) as maxRoomCount, " +
            "MIN(p.surfacePerSqMeter) as minArea, MAX(p.surfacePerSqMeter) as maxArea " +
            "FROM Premise p JOIN p.building b " +
            "WHERE b.investmentId = :investmentId")
    AggregatedValues findPremisePriceRangeByInvestmentId(@Param("investmentId") Long investmentId);

}
