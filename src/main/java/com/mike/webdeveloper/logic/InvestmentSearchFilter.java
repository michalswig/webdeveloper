package com.mike.webdeveloper.logic;

public class InvestmentSearchFilter {
    private Long developerId;

    public InvestmentSearchFilter(Long developerId) {
        this.developerId = developerId;
    }

    public Long getDeveloperId() {
        return developerId;
    }

    public void setDeveloperId(Long developerId) {
        this.developerId = developerId;
    }

}
