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

type initReducer<T, R> = {
  apply: (items: T[]) => R[];
};

type WithFilter<T, R> = {
  apply: (items: T[]) => R[];
};
