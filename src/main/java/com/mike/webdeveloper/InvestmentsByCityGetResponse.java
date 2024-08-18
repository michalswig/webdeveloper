package com.mike.webdeveloper;

import java.util.List;

public class InvestmentsByCityGetResponse {
    List<InvestmentGetResponse> investments;

    public InvestmentsByCityGetResponse(List<InvestmentGetResponse> investments) {
        this.investments = investments;
    }

    public List<InvestmentGetResponse> getInvestments() {
        return investments;
    }

    public void setInvestments(List<InvestmentGetResponse> investments) {
        this.investments = investments;
    }
}
