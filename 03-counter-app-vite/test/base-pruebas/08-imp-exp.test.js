import { getHeroeById, getHeroeByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../data/heroes'
describe('Pruebas en 08-im-exp', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const heroe = getHeroeById(1);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si el id no existe', () => {
        const heroe = getHeroeById(100);
        expect(heroe).toBeFalsy();
    });


    test('getHeroeByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroeByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    test('getHeroeByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroeByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
})