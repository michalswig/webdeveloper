package com.mike.webdeveloper.logic;

import com.mike.webdeveloper.config.ApplicationConfig;
import com.mike.webdeveloper.domain.InvestmentData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestmentService {
    private final InvestmentRepository investmentRepository;
    private final ApplicationConfig applicationConfig;

    public InvestmentService(InvestmentRepository investmentRepository, ApplicationConfig applicationConfig) {
        this.investmentRepository = investmentRepository;
        this.applicationConfig = applicationConfig;
    }

    public List<String> getInvestmentCitiesByDeveloperCode() {
        return investmentRepository.getInvestmentCitiesByDeveloperCode(applicationConfig.getSystemCode());
    }

    public List<InvestmentData> getInvestmentsByDeveloperCode() {
        return investmentRepository.getInvestmentsByDeveloperCode(applicationConfig.getSystemCode())
                .stream()
                .map(investment -> new InvestmentData(
                        investment.getId(),
                        investment.getName(),
                        investment.getDescription(),
                        investment.getAddressCountry(),
                        investment.getAddressStreet(),
                        investment.getDeveloper().getId(),
                        investment.getInvestmentCity().getId()
                )
        ).toList();
    }

    public List<InvestmentData> getInvestmentsByPremiseId(Long premiseId) {
        return investmentRepository.getInvestmentsByPremiseId(premiseId)
                .stream()
                .map(investment -> new InvestmentData(
                        investment.getId(),
                        investment.getName(),
                        investment.getDescription(),
                        investment.getAddressCountry(),
                        investment.getAddressStreet(),
                        investment.getDeveloper().getId(),
                        investment.getInvestmentCity().getId()
                )
        ).toList();
    }

}
