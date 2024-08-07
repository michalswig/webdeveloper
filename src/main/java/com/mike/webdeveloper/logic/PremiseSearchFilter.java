package com.mike.webdeveloper.logic;

public class PremiseSearchFilter {
    private final Long id;
    private final String languageCode;

    private PremiseSearchFilter(PremiseSearchFilterBuilder builder) {
        this.id = builder.id;
        this.languageCode = builder.languageCode;
    }

    public static class PremiseSearchFilterBuilder {
        private Long id;
        private String languageCode;

        public PremiseSearchFilterBuilder withId(Long id) {
            this.id = id;
            return this;
        }

        public PremiseSearchFilterBuilder withLanguageCode(String languageCode) {
            this.languageCode = languageCode;
            return this;
        }

        public PremiseSearchFilter build() {
            return new PremiseSearchFilter(this);
        }

    }

    public Long getId() {
        return id;
    }

    public String getLanguageCode() {
        return languageCode;
    }
}
