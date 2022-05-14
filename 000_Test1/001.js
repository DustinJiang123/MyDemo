const expect = require("chai").expect


function add(a, b) {
    return a + b
}

describe("TS_01_TC01", function () {
    it("step 01", function () {
        expect(add(1, 1)).equal(2)
    })
})

describe("TS_01_TC02", function () {
    it("step 01", function () {
        expect(add(1, 2)).equal(3)
    })
})
test