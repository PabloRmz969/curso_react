import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


jest.mock('../../src/hooks/useFetchGifs')
describe('pruebas en GifGrid', () => {
    const category = 'One punch';
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
    })

    test('debe mostrar items cuando se carga useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Satiama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})