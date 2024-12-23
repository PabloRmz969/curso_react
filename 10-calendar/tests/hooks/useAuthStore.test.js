import { configureStore } from "@reduxjs/toolkit";
import { authSlice, onLogoutCalendar } from "../../src/store";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { initialState, notAuthenticatedState } from "../fixtures/authStates";
import { testUserCredentials } from "../fixtures/testUser";
import { calendarApi } from "../../src/api";

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: { ...initialState }
        }
    });
}
// jest.mock('../../src/store');
describe('Pruebas en el AuthStore', () => {
    beforeEach(() =>  localStorage.clear() );

    test('debe de regresar los valores por defecto', () => {
        const mcokStore = getMockStore({ ...initialState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mcokStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            errorMessage: undefined,
            status: 'checking',
            user: {},
            checkAuthToken: expect.any(Function),
            startLogin: expect.any(Function),
            startLogout: expect.any(Function),
            startRegister: expect.any(Function)
        })
    });

    test('startLogin debe de realizar el login correctamente', async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin(testUserCredentials)
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: {
                name: "Test user",
                uid: "64ee10579735c6ac46c02d89",
            }
        });

        expect(localStorage.getItem('token')).toEqual(expect.any(String));
        expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));

    });

    test('startLogin debe de fallar la autenticación', async () => {

        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin({ email: 'algo@google.com', password: '1234567' });
        });

        const { errorMessage, status, user } = result.current;
        expect(localStorage.getItem('token')).toBe(null);
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'Credenciales incorrectas',
            status: 'not-authenticated',
            user: {}
        });

    });

    test('startRegister debe de crear un usuario', async () => {
        const newUser = { email: 'algo@google.com', password: '1234567' };

        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
        });

        const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
            data: {
                ok: true,
                uid: 'ALGUN-ID',
                name: 'Test User',
                token: 'ALGUN-TOKEN'
            }
        });

        await act(async () => {
            await result.current.startRegister(newUser);
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test User', uid: 'ALGUN-ID' }
        });
        spy.mockRestore();
    });

    test('startRegister debe fallar en la creación', async () => {

        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
        });


        await act(async () => {
            await result.current.startRegister(testUserCredentials);
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: "Un usuario ya existe con ese correo",
            status: "not-authenticated",
            user: {},
        });
    });

    test('checkAuthToken debe de fallar si no hay token', async () => {
        const mockStore = getMockStore({ ...initialState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
        });


        await act(async () => {
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: "not-authenticated",
            user: {},
        });

    });

    test('checkAuthToken debe de autenticar el usuario si hay un token', async () => {
        const { data } = await calendarApi.post('/auth', testUserCredentials);
        localStorage.setItem('token', data.token);

        const mockStore = getMockStore({ ...initialState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
        });


        await act(async () => {
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user', uid: '64ee10579735c6ac46c02d89' }
        });
    });

    // test('startLogout debe de hacer el logout', async () => {
    //     const dispatch = jest.fn();
    //     // await startLogout()(dispatch);
    //     const mockStore = getMockStore({ ...initialState });
    //     const { result } = renderHook(() => useAuthStore(), {
    //         wrapper: ({ children }) => <Provider store={mockStore} > {children}</Provider>
    //     });


    //     await act(async () => {
    //         await result.current.startLogout();
    //     });

    //     const { errorMessage, status, user } = result.current;
    //     expect(localStorage.getItem('token')).toBe(null);
    //     expect(dispatch).toHaveBeenCalledWith(onLogoutCalendar());

    // });
});

