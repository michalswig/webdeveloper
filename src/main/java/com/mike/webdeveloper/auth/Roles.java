package com.mike.webdeveloper.auth;

public enum Roles {
    USER("ROLE_USER"),
    ADMIN("ROLE_ADMIN"),
    DEVELOPER("ROLE_DEVELOPER"),;

    private String code;
    Roles(String code) {
        this.code = code;
    }

    public String getCode() {
        return this.code;
    }

    public static Roles fromCode(String code) {
        for (Roles role : Roles.values()) {
            if (role.getCode().equals(code)) {
                return role;
            }
        }
        throw new IllegalArgumentException("No role with code " + code + " found.");
    }

}
