import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";


const mockeUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockeUseNavigate
}));
describe('Pruebas en <SearchPage/>', () => {

    beforeEach(() => jest.clearAllMocks());
    test('debe de mostrarse correctamente con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');


        const f_hero = screen.getByLabelText('found_hero');
        expect(f_hero.style.display).toBe('none');

        const not_f_hero = screen.getByLabelText('not_found_hero');
        expect(not_f_hero.style.display).toBe('none');
        //screen.debug();
    });

    test('debe de mostrar un error si no encuentra el hero (batman213)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman213']}>
                <SearchPage />
            </MemoryRouter>
        );
        const not_f_hero = screen.getByLabelText('not_found_hero');
        expect(not_f_hero.style.display).toBe('');
        expect(screen.getByText('No hero with')).toBeTruthy();
    });

    test('debe de llamar el navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'batman' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockeUseNavigate).toHaveBeenCalledWith('?q=batman');
    });
})