import {getUser,getUserActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05 funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 1352,
            nickname: "CesarRubric" 
        }

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUserActivo debe retornar un objeto', () => {
        const name = 'César';
        const testUser = {
            uid: 1352,
            nickname: name
        }
        const user = getUserActivo(name);
        expect(testUser).toEqual(user);

    });
 })