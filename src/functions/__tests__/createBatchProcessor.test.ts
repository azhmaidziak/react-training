import createBatchProcessor from "../createBatchProcessor";

describe("Movie Mapper test", () => {
  const mapper = jest.fn((value: number): string => `${value}`);
  const data = [1, 2, 3];
  const expectedArgs = [
    [1, 0, [1, 2, 3]],
    [2, 1, [1, 2, 3]],
    [3, 2, [1, 2, 3]]
  ];
  const expectedResult = ["1", "2", "3"];
  it("batch processing test", () => {
    const actual = createBatchProcessor(mapper).apply(data);
    expect(actual).toEqual(expectedResult);
    expect(mapper.mock.calls).toEqual(expectedArgs);
  });
});
