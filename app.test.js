'use strict'

const app = require('./app')

describe('The function', () => {
    test('It returns 1 when it receives 1', () => {
        let result = app.fizzBuzz(1)
        expect(result).toEqual(1)
    })
    test('It returns fizz when it receives 3', () => {
        let result = app.fizzBuzz(3)
        expect(result).toEqual('fizz')
    })
    test('It returns fizz when it receives a number divisible by 3', () => {
        let result = 0
        result = app.fizzBuzz(6)
        expect(result).toEqual('fizz')
        result = app.fizzBuzz(9)
        expect(result).toEqual('fizz')
    })
    test('It returns buzz when it receives 5', () => {
        let result = app.fizzBuzz(5)
        expect(result).toEqual('buzz')
    })
    test('It returns buzz when it receives a number divisible by 5', () => {
        let result = 0
        result = app.fizzBuzz(10)
        expect(result).toEqual('buzz')
        result = app.fizzBuzz(20)
        expect(result).toEqual('buzz')
    })
    test('It returns fizzbuzz when it receives a number divisible by 3 and 5', () => {
        let result = 0
        result = app.fizzBuzz(15)
        expect(result).toEqual('fizzbuzz')
        result = app.fizzBuzz(30)
        expect(result).toEqual('fizzbuzz')
    })
    test('It returns the received number if it is not divisible by 3 nor 5', () => {
        let inputs = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19]
        inputs.forEach((number) => {
            let result = app.fizzBuzz(number)
            expect(result).toEqual(number)
        })
    })
})
