import { useEffect, useState } from "react";

export default function useDebounce<T>(initialState: T, delay = 500) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(initialState);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, initialState]);

  return state;
}
