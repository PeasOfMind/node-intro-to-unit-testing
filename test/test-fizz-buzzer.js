const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it("should return 'buzz' if divisible by 5, 'fizz' if divisible by 3, 'fizz-buzz' if divisible by both, or the input number otherwise", function() {
        const normalCases = [
            {num: 10, expected: 'buzz'},
            {num: 17, expected: 17},
            {num: 9, expected: 'fizz'},
            {num: 30, expected: 'fizz-buzz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if arg is not a number', function(){
        const badInputs = ['a', '1', 'fifty', false, null];
        badInputs.forEach(function(input){
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});