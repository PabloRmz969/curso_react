import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../src/ui";

const mockeUseNavigate = jest.fn();
jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockeUseNavigate
}));
describe('Pruebas en <Navbar/>', () => {
    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Pablo'
        },
        logout : jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {


        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace clic en el boton', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const button = screen.getByRole('button', { name: 'Logout' });
        fireEvent.click(button);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockeUseNavigate).toHaveBeenCalledWith('/login', {
            replace: true
        });

    })
})