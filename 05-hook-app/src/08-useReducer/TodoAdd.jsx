import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { onInputChange, onResetForm, description } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <>
            <form onSubmit={onFormSubmit} aria-label="form">
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    className="form-control"
                    aria-label="todoTxt"
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
