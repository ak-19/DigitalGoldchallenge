const solution = require('./solution');

describe('Test based on problem description', () => {
    test('On input 5, 5, [0, 4, 2, 0], [0, 0, 1, 4] - should return 3', () => {
        expect(solution(5, 5, [0, 4, 2, 0], [0, 0, 1, 4])).toBe(3);
    });
});
