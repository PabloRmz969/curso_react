import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-templat-string', () => { 
    test('getSaludo debe retornar Hola Pablo', () => {
        const name = "Pablo";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
})
