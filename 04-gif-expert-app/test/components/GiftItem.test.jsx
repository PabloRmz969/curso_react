import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en gifitem', () => {
    const title = 'Naruto';
    const url = 'https://naruto.jpg/';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el alt y src de la imagen', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe mostar el título del componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy()

    })
})