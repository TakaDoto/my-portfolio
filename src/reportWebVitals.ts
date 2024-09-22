import * as webVitals from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // List of expected web vitals functions
    const vitalsFunctions = ['getCLS', 'getFID', 'getFCP', 'getLCP', 'getTTFB'];

    vitalsFunctions.forEach((func) => {
      if (typeof (webVitals as any)[func] === 'function') {
        (webVitals as any)[func](onPerfEntry);
      }
    });
  }
};

export default reportWebVitals;
