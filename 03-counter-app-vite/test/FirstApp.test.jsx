import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp';

describe('Pruebas con FirstApp', () => {
    // test('Debe hacer match con el snapshot', () => {
    //     const title = 'Hola soy Goku';
    //     const { container } = render(<FirstApp title={title} />)

    //     expect(container).toMatchSnapshot();


    // });
    test('Debe de mostar el titulo en un h1', () => {
        const title = 'Hola soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText, getByTestId, getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title')).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2);

        // const h3 = container.querySelector('h3');
        // expect(h3.innerHTML).toContain(title);
    })
});