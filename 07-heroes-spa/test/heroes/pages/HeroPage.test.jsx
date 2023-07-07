import { MemoryRouter } from "react-router-dom"
import { HeroPage } from "../../../src/heroes"
import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"


const mockeUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 'dc-batman'
    }),
    useNavigate: () => mockeUseNavigate
}));
describe('Pruebas en <HeroPage/>', () => {
    beforeEach(() => jest.clearAllMocks());
    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Pablo'
        }
    }
    test('debe de regresar el componente por busqueda de batman', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/hero/dc-batman']}>
                    <HeroPage />
                </MemoryRouter>
            </AuthContext.Provider>

        );
        //screen.debug();

        expect(screen.getAllByText('Bruce Wayne')).toBeTruthy();
    });

    test('debe de regresar a marvel al dar clic en el boton', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/hero/dc-batman']}>
                    <HeroPage />
                </MemoryRouter>
            </AuthContext.Provider>

        );
        //screen.debug();
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockeUseNavigate).toHaveBeenCalled();
        expect(mockeUseNavigate).toHaveBeenCalledWith('/dc');
    });
})