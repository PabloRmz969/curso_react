import { useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const useModal = (initialState) => {
    const [isOpen, setIsOpen] = useState(true);
    const [formSubmited, setFormSubmited] = useState(false);
    const [formValues, setFormValues] = useState(initialState);

    const titleClass = useMemo(() => {
        if (!formSubmited) return;
        return (formValues.title.length > 0)
            ? ''
            : 'is-invalid';
    }, [formValues.title, formSubmited])

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        console.log('Cerrando modal');
        setIsOpen(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmited(true);
        const difference = differenceInSeconds(formValues.end, formValues.start);
        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
            return;
        }

        if (formValues.title.length < 0) return;

        console.log(formValues);
    }
    return {
        isOpen,
        formSubmited,
        formValues,
        titleClass,
        onInputChanged,
        onDateChanged,
        onCloseModal,
        onSubmit,
    }
}
