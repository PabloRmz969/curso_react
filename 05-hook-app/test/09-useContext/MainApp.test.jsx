import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => {
    test('debe mostrar HomePage por default', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe mostrar LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByRole('link', { name: 'Login' }).className).toContain('active');
        expect(screen.getByText('LoginPage')).toBeTruthy();
    })

    test('debe mostrar AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        
        expect(screen.getByText('AboutPage')).toBeTruthy();
    })
})