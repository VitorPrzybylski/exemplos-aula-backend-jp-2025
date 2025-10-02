import { describe, it, expect } from '@jest/globals'
import ServiceExercicio from '../src/services/exercicio'
describe('Testando funçao somar', () => {

    it('Somando dois numeros positivos', () => {
        const resultado = ServiceExercicio.Somar(1, 2)
        expect(resultado).toBe(3)
    })
    it('Somando dois numeros negativos', () => {
        const resultado = ServiceExercicio.Somar(-1, -2)
        expect(resultado).toBe(-3)
    })
    it('Somando dois numeros com casa decimal', () => {
        const resultado = ServiceExercicio.Somar(1.2, 2.2)
        expect(resultado).toBe(3.4)
    })
    it('Somando zero com outro numero', () => {
        const resultado = ServiceExercicio.Somar(0, 2)
        expect(resultado).toBe(2)
    })
    it('Somando um numero com zero', () => {
        const resultado = ServiceExercicio.Somar(1, 0)
        expect(resultado).toBe(1)
    })

})
describe('Salario, Valor hora x Horas trabalhadas', () => {
    it('calculando dois numeros inteiros', () => {
        const resultado = ServiceExercicio.Salario(10, 5)
        expect(resultado).toBe(50)
    })
    it('calculando dois numeros negativos', () => {
        const resultado = ServiceExercicio.Salario(-10, -5)
        expect(resultado).toBe(50)
    })
    it('calculando dois numeros com casas decimais', () => {
        const resultado = ServiceExercicio.Salario(10.2, 5.2)
        expect(resultado).toBe(50.4)
    })
    it('calculando dois numeros com 1 zero', () => {
        const resultado = ServiceExercicio.Salario(0, 5)
        expect(resultado).toBe(0)
    })
    
    //testando 
})