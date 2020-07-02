const directions = require('./testTwo');

test('Upon hitting enter, the box moves through all the directions provided in the directions array', () => {
    expect(context.stroke().toEqual(directions.length))
});


// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });