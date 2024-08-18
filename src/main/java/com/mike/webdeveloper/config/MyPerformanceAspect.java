package com.mike.webdeveloper.config;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class MyPerformanceAspect {

    @Pointcut("execution(public String pl.com.mike.developer.logic.developer.PremiseService.fetchTranslation(String, String, String))")
    public void myMonitor() {}
}