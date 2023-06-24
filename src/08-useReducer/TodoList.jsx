import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onRemoveTodo, onToggelTodo }) => {


    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onRemoveTodo={onRemoveTodo} 
                            onToggelTodo={onToggelTodo}
                        />
                    ))
                }

            </ul>
        </>
    )
}
