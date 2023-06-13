import React, { useEffect } from 'react';

const useDebounceCustom = (func, delay, deps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      func();
    }, delay);
  }, [deps]);
  return () => clearTimeout(timer);
};

export default useDebounceCustom;
