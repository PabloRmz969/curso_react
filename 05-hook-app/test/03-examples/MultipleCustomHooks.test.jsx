import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { useCounter, useFetch } from "../../src/hooks";
const { MultipleCustomHooks } = require("../../src/03-examples");

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('Prueba en el <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);


        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();

        //screen.debug();
    });

    test('debe mostrar un Queue', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Pablo', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(screen.getByText('Pablo')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar a la función incrementar', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Pablo', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })
})