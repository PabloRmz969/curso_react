import { CounterApp } from "../src/CounterApp"
import { fireEvent, render, screen } from '@testing-library/react'
describe('Pruebas con counter app', () => {
    const initialValue = 10;
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    })
    test('debe mostrar el valor inicial en 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
    })
    test('debe incrementar con el click en el boton +1', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('debe decrementar con el click en el boton -1', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    })
    test('debe funcionar el boton de reset', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('-1'))
        //fireEvent.click(screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(screen.getByText(initialValue)).toBeTruthy();
    })
})