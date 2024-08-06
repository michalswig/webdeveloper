package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.domain.Developer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface DeveloperRepository extends JpaRepository<Developer, Long> {

    Optional<Developer> findByCodeAndDeletedAtIsNull(String code);

    List<Developer> findByDeletedAtIsNull();

}
