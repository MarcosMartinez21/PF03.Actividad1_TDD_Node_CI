import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
    it('Si n < 0 se lanzara una excepcion del tipo RangeError', () => {
        expect(() => fibonacci(-1)).toThrow(RangeError)
    })
    it('Si n = 0. Se debe devolver 0', () => {
        expect(fibonacci(0)).toBe(0)
    })
    it('Si n = 1. Se debe devolver 1', () => {
        expect(fibonacci(1)).toBe(1)
    })
    it('Para n >= 2 f(n) = f(n-1) + f(n-2)', () => {
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(4)).toBe(3)
    })
})