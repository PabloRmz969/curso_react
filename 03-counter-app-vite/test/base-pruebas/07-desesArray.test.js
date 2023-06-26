import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07 desestructuracion array', () => {
    test('07-desesArray de retornar un string y un number', () => {
        const [str,number] = retornaArreglo();

        expect(str).toBe('ABC');
        expect(number).toBe(123);

        expect(typeof str).toBe('string');
        expect(typeof number).toBe('number');


        expect(str).toEqual(expect.any(String))
        
    });

})