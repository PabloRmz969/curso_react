import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        }
        dispatch(action)
    }


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}
