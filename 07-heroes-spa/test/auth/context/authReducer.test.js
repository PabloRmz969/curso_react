import { authReducer, types } from "../../../src/auth";


describe('Pruebas en el authReducer', () => {


    test('debe de retornar el estado por defecto', () => {
        const def_state = {
            logged: true,
            state: {
                id: 'ABC',
                name: 'Pablo'
            }
        };
        const state = authReducer(def_state, {});
        expect(state).toBe(def_state);
    });

    test('debe de (login) llamar el login y autenticar el state', () => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Pablo'
            }
        };
        const { user, logged } = authReducer({logged: false}, action);

        expect(logged).toBeTruthy();
        expect(user).toBe(action.payload);
    });
    test('debe de (logout) de borrar el state y logged en false', () => {

        const action = {
            type: types.logout
        };
        const { state, logged } = authReducer({logged: true}, action);
        expect(logged).toBeFalsy();
        expect(!state).toBeTruthy();
    });
})