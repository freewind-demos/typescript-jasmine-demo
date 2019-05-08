import 'jasmine-expect';

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect('hello').toBeSameLengthAs("abcde");
  });
});
