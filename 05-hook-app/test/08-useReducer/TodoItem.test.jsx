import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el componente <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Pieda del Alma',
        done: false
    }

    const onRemoveTodoMock = jest.fn();
    const onToggelTodoMock = jest.fn();


    beforeEach(() => jest.clearAllMocks());
    test('debe de mostrar el TODO pendiente de completar', () => {
        render(
            <TodoItem
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggelTodo={onToggelTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('debe de mostrar el TODO completado de completar', () => {
        todo.done = true;
        render(
            <TodoItem
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggelTodo={onToggelTodoMock}
            />
        )


        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span debe de llamar onToggleTodo cuando se hace click', () => {
        render(
            <TodoItem
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggelTodo={onToggelTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggelTodoMock).toBeCalledWith(todo.id);
    });

    test('el boton debe de llamar onRemoveTodo cuando se hace click', () => {
        render(
            <TodoItem
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggelTodo={onToggelTodoMock}
            />
        )

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onRemoveTodoMock).toBeCalledWith(todo.id);
    });

})