package com.mike.webdeveloper.config;

import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.logging.Log;
import org.springframework.aop.interceptor.AbstractMonitoringInterceptor;
import org.springframework.lang.NonNull;

import java.util.Date;

public class PerformanceMonitorInterceptor extends AbstractMonitoringInterceptor {

    private static final long WARNING_THRESHOLD_MS = 10;

    public PerformanceMonitorInterceptor(boolean useDynamicLogger) {
        setUseDynamicLogger(useDynamicLogger);
    }

    @Override
    protected Object invokeUnderTrace(@NonNull MethodInvocation invocation, @NonNull Log log) throws Throwable {
        String methodName = createInvocationTraceName(invocation);
        long startTime = System.currentTimeMillis();
        log.info(String.format("Method %s execution started at: %s", methodName, new Date(startTime)));
        try {
            return invocation.proceed();
        } finally {
            long endTime = System.currentTimeMillis();
            long duration = endTime - startTime;
            log.info(String.format("Method %s execution ended at: %s, Duration: %d ms", methodName, new Date(endTime), duration));

            if (duration > WARNING_THRESHOLD_MS) {
                log.warn("Method execution longer than " + WARNING_THRESHOLD_MS + " ms!");
            }
        }
    }

}