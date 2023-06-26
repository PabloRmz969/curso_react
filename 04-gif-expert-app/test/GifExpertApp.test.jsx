import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en <GifExpertApp/>', () => {
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })

    // test('probando onAddCategory', () => {
    //     const inputValue = 'Saitama';
    //     const onAddCategory = jest.fn('Naruto');

    //     render(<GifExpertApp />);
    //     expect(onAddCategory).toHaveBeenCalled();
        
    // })
})