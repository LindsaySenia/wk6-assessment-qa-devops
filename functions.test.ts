const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    // shuffleArray returns an array
// test('return an array', () => {
//     expect(shuffleArray())
// })
    //is the array the same length
test('return an array with length of 5', () => {
    expect(shuffleArray()).toHaveLength(5)
});
    //
})