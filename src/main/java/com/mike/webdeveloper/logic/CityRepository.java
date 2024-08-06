package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.domain.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    @Query("SELECT i.investmentCity FROM Investment i WHERE i.developer.code = :code")
    List<City> getCitiesByDeveloperCode(@Param("code") String code);

}
