import { add, multiply } from './math'

describe('add function', () => {
    test('1 + 2 = 3', () => {
        expect(add(1, 2)).toBe(3)
    })
})

describe('multiply function', () => {
    test('1 * 2 = 2', () => {
        expect(multiply(1, 2)).toBe(2)
    })
})
