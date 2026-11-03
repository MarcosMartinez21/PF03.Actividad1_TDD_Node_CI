import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
    it('No puede ser null ni undefined.', () => {
        expect(esPinValido(null)).toBe(false)
        expect(esPinValido(undefined)).toBe(false)
    })
    it('No puede estar vacio', () => {
        expect(esPinValido("")).toBe(false)
    })
    it('Longitud 4 o 6', () => {
        expect(esPinValido("1234")).toBe(true)
        expect(esPinValido("123456")).toBe(true)
        expect(esPinValido("123")).toBe(false)
    })
    it('Solo digitos del 0 al 9', () => {
        expect(esPinValido("123456")).toBe(true)
        expect(esPinValido("12ab34")).toBe(false)
    })
    it('Prohibido que todos los dígitos sean iguales', () => {
        expect(esPinValido("1111")).toBe(false)
        expect(esPinValido("1234")).toBe(true)
        expect(esPinValido("1112")).toBe(true)
    })
})