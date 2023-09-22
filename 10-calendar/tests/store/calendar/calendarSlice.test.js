import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('pruebas en el calendarSlice', () => {
    test('debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);
    });

    test('onSetActiveEvent debe activar el evento', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0]);
    });

    test('onAddNewEvent debe agregar el evento', () => {
        const newEvent = {
            id: '3',
            start: new Date('2023-09-02 13:00:00'),
            end: new Date('2023-09-02 15:00:00'),
            title: 'Cumpleaños de Pablo!!',
            notes: 'Alguna nota x 2',
        }

        const state = calendarSlice.reducer(calendarWithActiveEventsState, onAddNewEvent(newEvent));
        expect(state.events).toEqual([...events, newEvent]);
    });

    test('onUpdateEvent debe actualizar el evento', () => {
        const updatedEvent = {
            id: '1',
            start: new Date('2023-08-31 13:00:00'),
            end: new Date('2023-08-31 15:00:00'),
            title: 'Cumpleaños de Pablo actualizado',
            notes: 'Alguna nota actualizada',
        }

        const state = calendarSlice.reducer(calendarWithActiveEventsState, onUpdateEvent(updatedEvent));
        expect(state.events).toContain(updatedEvent);
    });

    test('onDeleteEvent debe de borrar el evento activo', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onDeleteEvent());
        expect(state.events).toEqual([events[1]]);
    });

    test('onLoadEvents debe establecer los eventos', () => {
        const state = calendarSlice.reducer(initialState, onLoadEvents(events));
        expect(state.events).toEqual(events);
        expect(state.isLoadingEvents).toBeFalsy();
    });

    test('onLogoutCalendar debe de limpiar el estado', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onLogoutCalendar());
        expect(state).toEqual(initialState);
    });
})