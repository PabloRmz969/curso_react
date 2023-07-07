import { fireEvent, render, screen } from "@testing-library/react"
import { TodoAdd } from "../../src/08-useReducer/TodoAdd"
import { useTodo } from "../../src/hooks";


jest.mock('../../src/hooks/useTodo');
describe('Pruebas en TodoAdd', () => {
    const inputValue = 'Gema del poder';

    test('debe cambiar el valor del input', () => {
        render(<TodoAdd onNewTodo={() => { }} />);
        const input = screen.getByLabelText('todoTxt');

        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
    });

    test('debe de llamar a newTodo si el input tiene un valor ', () => {
        const handleNewTodoMock = jest.fn();
        const newTodo = {
            id: new Date().getTime(),
            description: inputValue,
            done: false
        }

        render(<TodoAdd onNewTodo={handleNewTodoMock} />);
        const input = screen.getByLabelText('todoTxt');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(handleNewTodoMock).toHaveBeenCalled();
        expect(handleNewTodoMock).toHaveBeenCalledTimes(1);
        //expect(handleNewTodoMock).toHaveBeenCalledWith(newTodo);
    });

    test('no debe de llamar a newTodo si el input no tiene un valor ', () => {
        const handleNewTodoMock = jest.fn();


        render(<TodoAdd onNewTodo={handleNewTodoMock} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(handleNewTodoMock).not.toHaveBeenCalled();
        expect(handleNewTodoMock).toHaveBeenCalledTimes(0);

    })
})