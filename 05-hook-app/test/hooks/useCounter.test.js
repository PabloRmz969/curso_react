import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('pruebas en useCounter', () => {
    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(100);
    });

    test('debe incrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(103);
    });

    test('debe decrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(98);
    });

    test('debe establecer en el valor predefinido del counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter,decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        })

        expect(result.current.counter).toBe(100);
    });
})