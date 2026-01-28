// 性能监控工具

/**
 * 性能监控类
 * 用于监控应用的性能指标，如页面加载时间、组件渲染时间等
 */
export class PerformanceMonitor {
  private metrics: Record<string, number> = {};
  private marks: Record<string, number> = {};
  private measures: Record<string, number> = {};
  private isEnabled: boolean = false;

  /**
   * 启用性能监控
   */
  enable(): void {
    this.isEnabled = true;
    console.log('Performance monitoring enabled');
  }

  /**
   * 禁用性能监控
   */
  disable(): void {
    this.isEnabled = false;
    console.log('Performance monitoring disabled');
  }

  /**
   * 记录性能标记
   * @param name 标记名称
   */
  mark(name: string): void {
    if (!this.isEnabled) return;
    
    this.marks[name] = performance.now();
  }

  /**
   * 测量两个标记之间的时间差
   * @param name 测量名称
   * @param startMark 开始标记名称
   * @param endMark 结束标记名称
   * @returns 时间差（毫秒）
   */
  measure(name: string, startMark: string, endMark: string): number {
    if (!this.isEnabled) return 0;
    
    const startTime = this.marks[startMark];
    const endTime = this.marks[endMark];
    
    if (!startTime || !endTime) {
      console.warn(`Performance marks not found: ${startMark} or ${endMark}`);
      return 0;
    }
    
    const duration = endTime - startTime;
    this.measures[name] = duration;
    
    console.log(`Performance measure ${name}: ${duration.toFixed(2)}ms`);
    return duration;
  }

  /**
   * 记录自定义性能指标
   * @param name 指标名称
   * @param value 指标值
   */
  recordMetric(name: string, value: number): void {
    if (!this.isEnabled) return;
    
    this.metrics[name] = value;
  }

  /**
   * 获取所有性能指标
   * @returns 性能指标对象
   */
  getMetrics(): Record<string, number> {
    return {
      ...this.metrics,
      ...this.measures
    };
  }

  /**
   * 重置所有性能指标
   */
  reset(): void {
    this.metrics = {};
    this.marks = {};
    this.measures = {};
  }

  /**
   * 报告性能指标
   * 可以将性能数据发送到服务器或日志系统
   */
  report(): void {
    if (!this.isEnabled) return;
    
    const metrics = this.getMetrics();
    console.log('Performance Report:', metrics);
    
    // 这里可以添加将性能数据发送到服务器的逻辑
    // 例如：fetch('/api/performance', { method: 'POST', body: JSON.stringify(metrics) });
  }
}

// 创建性能监控实例
const performanceMonitor = new PerformanceMonitor();

// 导出单例实例
export default performanceMonitor;

/**
 * 组件性能监控装饰器
 * 用于监控组件的渲染时间
 * @param componentName 组件名称
 */
export function monitorComponent(componentName: string) {
  return function(_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      if (!performanceMonitor['isEnabled']) {
        return originalMethod.apply(this, args);
      }
      
      const markName = `${componentName}-${propertyKey}`;
      performanceMonitor.mark(`${markName}-start`);
      
      const result = originalMethod.apply(this, args);
      
      // 对于异步方法的处理
      if (result instanceof Promise) {
        return result.then((res) => {
          performanceMonitor.mark(`${markName}-end`);
          performanceMonitor.measure(markName, `${markName}-start`, `${markName}-end`);
          return res;
        });
      } else {
        performanceMonitor.mark(`${markName}-end`);
        performanceMonitor.measure(markName, `${markName}-start`, `${markName}-end`);
        return result;
      }
    };
    
    return descriptor;
  };
}

/**
 * 页面加载性能监控
 * 监控页面的加载时间和资源加载情况
 */
export function monitorPageLoad(): void {
  if (typeof window === 'undefined') return;
  
  // 监控页面加载完成时间
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    performanceMonitor.recordMetric('pageLoadTime', loadTime);
    console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
  });
  
  // 监控DOM内容加载完成时间
  window.addEventListener('DOMContentLoaded', () => {
    const domLoadTime = performance.now();
    performanceMonitor.recordMetric('domLoadTime', domLoadTime);
    console.log(`DOM content loaded time: ${domLoadTime.toFixed(2)}ms`);
  });
  
  // 监控首次绘制时间
  if ('performance' in window && 'paintTiming' in performance) {
    performance.getEntriesByType('paint').forEach((entry: any) => {
      if (entry.name === 'first-paint') {
        performanceMonitor.recordMetric('firstPaintTime', entry.startTime);
        console.log(`First paint time: ${entry.startTime.toFixed(2)}ms`);
      } else if (entry.name === 'first-contentful-paint') {
        performanceMonitor.recordMetric('firstContentfulPaintTime', entry.startTime);
        console.log(`First contentful paint time: ${entry.startTime.toFixed(2)}ms`);
      }
    });
  }
}

/**
 * 资源加载性能监控
 * 监控页面资源的加载情况
 */
export function monitorResourceLoad(): void {
  if (typeof window === 'undefined') return;
  
  if ('performance' in window) {
    // 使用PerformanceObserver监控资源加载
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.initiatorType !== 'xmlhttprequest' && resource.initiatorType !== 'fetch') {
              performanceMonitor.recordMetric(`${resource.initiatorType}-${resource.name}`, resource.duration);
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }
  }
}
