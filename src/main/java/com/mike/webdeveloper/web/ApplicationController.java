package com.mike.webdeveloper.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class ApplicationController {

    @GetMapping({"/", "/home"})
    public RedirectView home() {
        return new RedirectView("/index.html");
    }

}
