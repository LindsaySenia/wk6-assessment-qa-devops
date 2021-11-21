const {shuffleArray} = require('./utils')

const testArr = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi','omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega']

describe('shuffleArray should', () => {
    // CODE HERE
test('return an object', () => {
    expect(typeof shuffleArray(testArr)).toEqual('object');
});

test('returns an array containing testArr', () => {
    expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr));
});


    // shuffleArray returns an array
// test('return an array', () => {
//     expect(shuffleArray())
// })
    //is the array the same length
// test('return an array with length of 5', () => {
//     expect(shuffleArray()).toHaveLength(5)
// });
    //
})