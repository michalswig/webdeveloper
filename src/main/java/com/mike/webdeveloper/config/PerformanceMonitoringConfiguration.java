package com.mike.webdeveloper.config;

import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Lazy;

@Configuration
@EnableAspectJAutoProxy
@Lazy
public class PerformanceMonitoringConfiguration {

    @Bean
    public PerformanceMonitorInterceptor myPerformanceMonitorInterceptor() {
        return new PerformanceMonitorInterceptor(true);
    }

    @Bean
    public Advisor myPerformanceMonitorAdvisor(PerformanceMonitorInterceptor interceptor) {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("execution(public String pl.com.mike.developer.logic.developer.PremiseService.fetchTranslation(String, String, String))");
        return new DefaultPointcutAdvisor(pointcut, interceptor);
    }
}