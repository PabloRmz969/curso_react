const { renderHook, act } = require("@testing-library/react");
const { useUiStore } = require("../../src/hooks/useUiStore");
const { Provider } = require("react-redux");
const { uiSlice } = require("../../src/store");
const { configureStore } = require("@reduxjs/toolkit");

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: { ...initialState }
        }
    });
}

describe('pruebas en useUiStore', () => {
    test('debe de regresar los valores por defecto', () => {
        const mcokStore = getMockStore({ isDateModalOpen: false });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mcokStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            isDateModalOpen: false,
            closeDateModal: expect.any(Function),
            openDateModal: expect.any(Function),
            toggleDateModal: expect.any(Function),

        })
    });

    test('openDateModal debe de colocar true en el isDateModalOpen', () => {
        const mcokStore = getMockStore({ isDateModalOpen: false });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mcokStore}>{children}</Provider>
        });

        const {openDateModal} = result.current;

        act(()=>{
            openDateModal();
        });

        expect(result.current.isDateModalOpen).toBeTruthy();
    });

    test('closeDateModal debe de colocar false en el isDateModalOpen', () => {
        const mcokStore = getMockStore({ isDateModalOpen: true });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mcokStore}>{children}</Provider>
        });

        const {closeDateModal} = result.current;

        act(()=>{
            closeDateModal();
        });

        expect(result.current.isDateModalOpen).toBeFalsy();
    });

    test('toggleDateModal debe de colocar true/false en el isDateModalOpen dependiendo si esta abierto', () => {
        const mcokStore = getMockStore({ isDateModalOpen: true });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mcokStore}>{children}</Provider>
        });


        act(()=>{
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeFalsy();

        act(()=>{
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeTruthy();
    });
})