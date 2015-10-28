
describe("Test Suite Initial unit test", function() {
    it("Initial empty test for check Jasmine", function () {
      expect(true).toBe(true);
    });
});

describe("Move tests of the robot", function() {



    it("Main Move Method Test - Empty Inputs", function () {
      expect(move()).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - One Parameter", function () {
      expect(move(1)).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Two Parameter", function () {
      expect(move(1,2)).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Three Parameter", function () {
      expect(move(1,2,3)).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Four Parameter", function () {
      expect(move(1,2,3,[])).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Negative Input Check x", function () {
      expect(move(-1,2,3,[])).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Negative Input Check y", function () {
      expect(move(1,-2,3,[])).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Negative Input Check index", function () {
      expect(move(1,2,-3,[])).toBe("Invalid Inputs");
    });

    it("Main Move Method Test - Negative Input Check x,y,index", function () {
      expect(move(-1,-2,-3,[])).toBe("Invalid Inputs");
    });
  
    it("MoveToTop Method Test - Empty Inputs", function () {
      expect(moveToTop()).toBe("Invalid Inputs");
    });

    it("MoveToTop Method Test - One Parameter", function () {
      expect(moveToTop(1)).toBe("Invalid Inputs");
    });

    it("MoveToTop Method Test - Two Parameter", function () {
      expect(moveToTop(1,2)).toBe("Invalid Inputs");
    });

    it("MoveToTop Method Test - Three Parameter", function () {
      expect(moveToTop(1,2,3)).toBe("Invalid Inputs");
    });

    it("MoveToTop Method Test - Four Parameter", function () {
      expect(moveToTop(1,2,3,[])).toBe("Invalid Inputs");
    });



});