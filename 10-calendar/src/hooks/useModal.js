import { useEffect, useMemo, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore } from './useUiStore';
import { useCalendarStore } from './useCalendarStore';

export const useModal = (initialState) => {
    //const [isOpen, setIsOpen] = useState(true);
    const { closeDateModal } = useUiStore();
    const { activeEvent, startSavingEvent } = useCalendarStore();


    const [formSubmited, setFormSubmited] = useState(false);
    const [formValues, setFormValues] = useState(initialState);

    const titleClass = useMemo(() => {
        if (!formSubmited) return;
        return (formValues.title.length > 0)
            ? ''
            : 'is-invalid';
    }, [formValues.title, formSubmited])

    useEffect(() => {
        if (activeEvent != null) {
            setFormValues({ ...activeEvent })
        }
    }, [activeEvent])

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
        closeDateModal();
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmited(true);
        const difference = differenceInSeconds(formValues.end, formValues.start);
        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
            return;
        }

        if (formValues.title.length < 0) return;

        console.log(formValues);

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmited(false);
    }
    return {
        formSubmited,
        formValues,
        titleClass,
        onInputChanged,
        onDateChanged,
        onCloseModal,
        onSubmit,
    }
}
