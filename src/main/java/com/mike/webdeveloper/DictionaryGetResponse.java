package com.mike.webdeveloper;

public class DictionaryGetResponse {
    private String translation;

    public DictionaryGetResponse(String translation) {
        this.translation = translation;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }
}
