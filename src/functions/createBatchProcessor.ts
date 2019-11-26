const createBatchProcessor = function<T, R>(
  mapper: (value: T) => R
): WithFilter<T, R> {
  return {
    apply: (items: T[]): R[] => {
      return items.map(mapper);
    }
  };
};

export default createBatchProcessor;

type WithFilter<T, R> = {
  apply: (items: T[]) => R[];
};
