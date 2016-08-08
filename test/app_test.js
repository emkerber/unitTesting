var addOne = require('../src/app').addOne;
var expect = require('chai').expect;

describe('testing the addOne function', function() {

  it('should add 1 to the argument', function() {
    //here is where the test code goes
    var number = 42;
    var result = addOne(number);

    expect(result).to.equal(43);
  });

  //it(...) to test another thing; or you can have another describe block
});
