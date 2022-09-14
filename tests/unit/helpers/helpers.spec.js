const { ToUpperCase, Suma, AddToArray } = require('../../../app/helpers/functions');


describe('Validar la funcion ToUpperCase', () => {

    test('Devuelve Mayuscula la primera letra de cada palabra', () => {

        const result = ToUpperCase('prueba con mas palabras')
        expect(result).toBe('Prueba Con Mas Palabras')
    })

})

describe('Validar la funcion Suma', () => {

    test('Devuelve la suma de dos numeros', () => {

        const result = Suma(20, 5)
        expect(result).toBe(25)
    })

    it('retorna un mensaje de error si los parametros no son de tipo number', () => {

        const result = Suma('20', 5)
        expect(result).toBe('ingrese numeros')
    })

})


describe('Validar la funcion AddToArray', () => {

    test('Agrega mas elementos a un array', () => {

        let listColors = ['Naranja'];
        const result = AddToArray(listColors, 'Rojo')
        expect(result).toContain('Rojo');
    })

})