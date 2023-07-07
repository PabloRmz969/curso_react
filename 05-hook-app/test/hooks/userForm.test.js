import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('pruebas en useForm', () => {
    const initialForm = {
        name: 'Pablo',
        email: 'pablo@gmail.com'
    }
    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    });

    test('debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: 'Juan'
                }
            });
        })

        expect(result.current.name).toBe('Juan');
        expect(result.current.formState.name).toBe('Juan');
    });

    test('debe realizar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm } = result.current;

        act(() => {
            onResetForm();
        })

        expect(result.current.formState).toBe(initialForm);
    });
})