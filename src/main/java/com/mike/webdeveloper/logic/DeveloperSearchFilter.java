package com.mike.webdeveloper.logic;

public class DeveloperSearchFilter {
    private Long id;
    private String code;

    public DeveloperSearchFilter(String code) {
        this.code = code;
    }

    public DeveloperSearchFilter(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }
}
