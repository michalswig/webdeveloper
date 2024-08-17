package com.mike.webdeveloper;

import java.util.List;

public class DevelopersGetResponse {
    List<DeveloperGetResponse> developers;

    public DevelopersGetResponse(List<DeveloperGetResponse> developers) {
        this.developers = developers;
    }

    public List<DeveloperGetResponse> getDevelopers() {
        return developers;
    }

    public void setDevelopers(List<DeveloperGetResponse> developers) {
        this.developers = developers;
    }
}
