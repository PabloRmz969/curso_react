import { personaActiva } from '../../src/base-pruebas/06-deses-obj';

describe('Prueba en 06-desestructuracion', () => {
    test('Debe retornar un objeto con otro dentro', () => {
        const testPerson = {
            clave: 'A351',
            nombre: 'Pablo',
            edad: 26,
            rango: 'Comandante'
        }

        const person = personaActiva(testPerson);

        expect(person).toStrictEqual({
            nombreClave: 'A351',
            anios: 26,
            latlng: { lat: 48.1651, lng: -14.85 }
        });
    });
})