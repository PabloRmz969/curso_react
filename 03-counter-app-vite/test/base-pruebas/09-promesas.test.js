import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
describe('Pruebas en 09-promesas', () => { 
    test('getHeroeByIdAsync obtener un error si el heroe no existe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toBeFalsy
                done();
            })
            .catch( error => {
                expect(error).toBe(`No se pudo econtrar el heroe con el id ${id}`);
                done();
            });
    });
 })