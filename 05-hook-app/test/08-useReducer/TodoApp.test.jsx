import { render, screen } from '@testing-library/react'
import { useTodo } from '../../src/hooks'
import { TodoApp } from '../../src/08-useReducer/TodoApp';

jest.mock('../../src/hooks');
describe('pruebas en <TodoApp />', () => {
    useTodo.mockReturnValue({
        todos:[
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true}
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleRemoveTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    })
    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp />);
        //screen.debug();

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })
})