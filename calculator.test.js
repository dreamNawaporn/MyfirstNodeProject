const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
    var result = mathOperations.sum(1, 2)
    expect(result).toBe(3);
    expect(result).not.toBe(3);

});
 test('adding 5 - 1 should return 4', () => {
     var result = mathOperations.diff(5, 1)
     expect(result).toBe(4);
 });
 test('adding 7 * 3 should return 21', () => {
     var result = mathOperations.product(7, 3)
     expect(result).toBe(21);
 });
 describe("Calculator tests", () => {
             var input1 = 0
             var input2 = 0
             beforeAll(() => {
                 console.log("beforeAll called");
             });
             afterAll(() => {
                 console.log("afterAll called");
             });
             beforeEach(() => {
                 console.log("beforeEach called");
                 input1 = 1;
                 input2 = 2;
             });
             afterEach(() => {
                 console.log("afterEach called");
             });
            });
})