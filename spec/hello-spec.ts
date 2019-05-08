import 'jasmine-expect';

describe('beforeAll must be inside "describe" to work with jasmine-expect', () => {
  beforeAll(() => {
    expect('hello').toBeSameLengthAs("abcde");
  });
});

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect('hello').toBeSameLengthAs("abcde");
  });
});
